import type * as ts from 'typescript';
export declare function inferComponentType(componentType: ts.Type): 1 | 2 | undefined;
export declare function inferComponentProps(typeChecker: ts.TypeChecker, componentType: ts.Type): ts.Type | undefined;
export declare function inferComponentSlots(typeChecker: ts.TypeChecker, componentType: ts.Type): ts.Type | undefined;
export declare function inferComponentEmit(typeChecker: ts.TypeChecker, componentType: ts.Type): ts.Type | undefined;
export declare function inferComponentExposed(typeChecker: ts.TypeChecker, componentType: ts.Type): ts.Type | undefined;
