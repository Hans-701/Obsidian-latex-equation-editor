// en latex-data/flechas.ts

import type { LatexSymbol } from "./types";

export const flechasSymbols: LatexSymbol[] = [
    // Flechas simples
    { display: '\\rightarrow', insert: '\\rightarrow' },
    { display: '\\leftarrow', insert: '\\leftarrow' },
    { display: '\\leftrightarrow', insert: '\\leftrightarrow' },

    // Flechas dobles
    { display: '\\Rightarrow', insert: '\\Rightarrow' },
    { display: '\\Leftarrow', insert: '\\Leftarrow' },
    { display: '\\Leftrightarrow', insert: '\\Leftrightarrow' },

    // Flechas verticales
    { display: '\\uparrow', insert: '\\uparrow' },
    { display: '\\downarrow', insert: '\\downarrow' },
    { display: '\\updownarrow', insert: '\\updownarrow' },

    // Flechas largas
    { display: '\\longrightarrow', insert: '\\longrightarrow' },
    { display: '\\longleftarrow', insert: '\\longleftarrow' },

    // Flechas con texto
    { display: '\\longrightarrow_{a}', insert: '\\longrightarrow_{}', cursorPos: -1 },
    { display: '\\longleftarrow_{b}', insert: '\\longleftarrow_{}', cursorPos: -1 },

    // Flechas con signo
    { display: '\\mapsto', insert: '\\mapsto' },
    { display: '\\longmapsto', insert: '\\longmapsto' }
];
