// en latex-data/acentos.ts

import type { LatexSymbol } from "./types";

export const acentosSymbols: LatexSymbol[] = [
    // Decoradores y acentos
    { display: '\\widetilde{x}', insert: '\\widetilde{}', cursorPos: -1 },
    { display: '\\widehat{x}', insert: '\\widehat{}', cursorPos: -1 },
    { display: '\\overline{x}', insert: '\\overline{}', cursorPos: -1 },
    { display: '\\underline{x}', insert: '\\underline{}', cursorPos: -1 },
    { display: '\\overrightarrow{x}', insert: '\\overrightarrow{}', cursorPos: -1 },
    { display: '\\overleftarrow{x}', insert: '\\overleftarrow{}', cursorPos: -1 },
    { display: '\\vec{x}', insert: '\\vec{}', cursorPos: -1 },
    { display: '\\dot{x}', insert: '\\dot{}', cursorPos: -1 },
    { display: '\\ddot{x}', insert: '\\ddot{}', cursorPos: -1 },
    { display: '\\acute{x}', insert: '\\acute{}', cursorPos: -1 },
    { display: '\\grave{x}', insert: '\\grave{}', cursorPos: -1 }
];
