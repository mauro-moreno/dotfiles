import * as core from '@vue/language-core';
import type * as ts from 'typescript';
import type { ComponentMeta, MetaCheckerSchemaOptions } from './types';
export declare function getComponentMeta(ts: typeof import('typescript'), typeChecker: ts.TypeChecker, printer: ts.Printer, language: core.Language, getSourceScript: (fileName: string) => core.SourceScript | undefined, componentNode: ts.Node, componentType: ts.Type, options: MetaCheckerSchemaOptions, deprecatedOptions?: {
    noDeclarations: boolean;
    rawType: boolean;
}): ComponentMeta;
