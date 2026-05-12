import type * as core from '@vue/language-core';
import type * as ts from 'typescript';
import type { EventMeta, ExposeMeta, PropertyMeta, PropertyMetaSchema, SlotMeta } from './types';
export declare function createSchemaResolvers(ts: typeof import('typescript'), typeChecker: ts.TypeChecker, printer: ts.Printer, language: core.Language, getSourceScript: (fileName: string) => core.SourceScript | undefined, options: import('./types').MetaCheckerSchemaOptions, deprecatedOptions: {
    noDeclarations: boolean;
    rawType: boolean;
}): {
    resolveNestedProperties: (propSymbol: ts.Symbol) => PropertyMeta;
    resolveSlotProperties: (prop: ts.Symbol) => SlotMeta;
    resolveEventSignature: (call: ts.Signature) => EventMeta;
    resolveExposedProperties: (expose: ts.Symbol) => ExposeMeta;
    resolveSchema: (subtype: ts.Type) => PropertyMetaSchema;
};
