import * as core from '@vue/language-core';
import type * as ts from 'typescript';
export declare function getDefaultsFromScriptSetup(ts: typeof import('typescript'), printer: ts.Printer, sourceScript: core.SourceScript | undefined): Map<string, string> | undefined;
export declare function resolveDefaultOptionExpression(ts: typeof import('typescript'), _default: ts.Expression): ts.Expression;
