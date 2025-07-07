// en latex-data/types.ts

export interface LatexSymbol {
    display: string;      // Lo que se muestra en el botón (puede ser texto o un render de LaTeX)
    insert: string;       // El código LaTeX que se inserta en el editor
    cursorPos?: number;   // La posición final del cursor después de la inserción
}

export interface SymbolSection {
    name: string;
    symbols: LatexSymbol[];
}