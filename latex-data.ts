// en latex-data.ts

export interface LatexSymbol {
    display: string;
    insert: string;
    cursorPos?: number; // Opcional: para el futuro posicionamiento inteligente
}

export const SYMBOLS: LatexSymbol[] = [
    { display: 'α', insert: '\\alpha' },
    { display: 'β', insert: '\\beta' },
    { display: 'γ', insert: '\\gamma' },
    { display: 'δ', insert: '\\delta' },
    { display: '∑', insert: '\\sum' },
    { display: '∞', insert: '\\infty' },
    { display: '→', insert: '\\to' },
    { display: 'frac', insert: '\\frac{}{}', cursorPos: 6 }, // Preparado para el siguiente paso
];