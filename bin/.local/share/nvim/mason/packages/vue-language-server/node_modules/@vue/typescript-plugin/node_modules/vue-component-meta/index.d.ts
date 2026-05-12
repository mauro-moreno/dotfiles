import * as ts from 'typescript';
import type { MetaCheckerOptions } from './lib/types';
export * from './lib/types';
export declare function createCheckerByJson(rootDir: string, json: any, checkerOptions?: MetaCheckerOptions): {
    getExportNames: (componentPath: string) => string[];
    getComponentMeta(fileName: string, exportName?: string): import("./lib/types").ComponentMeta;
    updateFile(fileName: string, text: string): void;
    deleteFile(fileName: string): void;
    reload(): void;
    clearCache(): void;
    getProgram(): ts.Program | undefined;
};
export declare function createChecker(tsconfig: string, checkerOptions?: MetaCheckerOptions): {
    getExportNames: (componentPath: string) => string[];
    getComponentMeta(fileName: string, exportName?: string): import("./lib/types").ComponentMeta;
    updateFile(fileName: string, text: string): void;
    deleteFile(fileName: string): void;
    reload(): void;
    clearCache(): void;
    getProgram(): ts.Program | undefined;
};
