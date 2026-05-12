import * as core from '@vue/language-core';
import type * as ts from 'typescript';
import type { MetaCheckerOptions } from './types';
export declare function createCheckerBase(ts: typeof import('typescript'), getConfigAndFiles: () => [
    commandLine: core.ParsedCommandLine,
    fileNames: string[]
], checkerOptions: MetaCheckerOptions, rootPath: string): {
    getExportNames: (componentPath: string) => string[];
    getComponentMeta(fileName: string, exportName?: string): import("./types").ComponentMeta;
    updateFile(fileName: string, text: string): void;
    deleteFile(fileName: string): void;
    reload(): void;
    clearCache(): void;
    getProgram(): ts.Program | undefined;
};
export declare function getExport(ts: typeof import('typescript'), program: ts.Program, sourceFile: ts.SourceFile, exportName: string): ts.Expression | undefined;
