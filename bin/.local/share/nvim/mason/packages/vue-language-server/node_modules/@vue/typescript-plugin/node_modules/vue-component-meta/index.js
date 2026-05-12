"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCheckerByJson = createCheckerByJson;
exports.createChecker = createChecker;
const core = __importStar(require("@vue/language-core"));
const path_browserify_1 = require("path-browserify");
const ts = __importStar(require("typescript"));
const checker_1 = require("./lib/checker");
__exportStar(require("./lib/types"), exports);
function createCheckerByJson(rootDir, json, checkerOptions = {}) {
    rootDir = rootDir.replace(/\\/g, '/');
    return (0, checker_1.createCheckerBase)(ts, () => {
        const commandLine = core.createParsedCommandLineByJson(ts, ts.sys, rootDir, json);
        const { fileNames } = ts.parseJsonConfigFileContent(json, ts.sys, rootDir, {}, undefined, undefined, core.getAllExtensions(commandLine.vueOptions)
            .map(extension => ({
            extension: extension.slice(1),
            isMixedContent: true,
            scriptKind: ts.ScriptKind.Deferred,
        })));
        return [commandLine, fileNames];
    }, checkerOptions, rootDir);
}
function createChecker(tsconfig, checkerOptions = {}) {
    tsconfig = tsconfig.replace(/\\/g, '/');
    return (0, checker_1.createCheckerBase)(ts, () => {
        const commandLine = core.createParsedCommandLine(ts, ts.sys, tsconfig);
        const { fileNames } = ts.parseJsonSourceFileConfigFileContent(ts.readJsonConfigFile(tsconfig, ts.sys.readFile), ts.sys, path_browserify_1.posix.dirname(tsconfig), {}, tsconfig, undefined, core.getAllExtensions(commandLine.vueOptions)
            .map(extension => ({
            extension: extension.slice(1),
            isMixedContent: true,
            scriptKind: ts.ScriptKind.Deferred,
        })));
        return [commandLine, fileNames];
    }, checkerOptions, path_browserify_1.posix.dirname(tsconfig));
}
//# sourceMappingURL=index.js.map