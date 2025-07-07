// en latex-data/matrices.ts

import type { LatexSymbol } from "./types";

export const matricesSymbols: LatexSymbol[] = [
    // Notación básica de matrices
    { display: '\\begin{matrix} a & b \\\\ c & d \\end{matrix}', insert: '\\begin{matrix}  &  \\\\  &  \\end{matrix}', cursorPos: -23 },
    { display: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}', insert: '\\begin{pmatrix}  &  \\\\  &  \\end{pmatrix}', cursorPos: -24 },
    { display: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}', insert: '\\begin{bmatrix}  &  \\\\  &  \\end{bmatrix}', cursorPos: -24 },

    // Determinantes
    { display: '\\det{A}', insert: '\\det{}', cursorPos: -1 },
    { display: '\\text{det}(A)', insert: '\\text{det}()', cursorPos: -1 },

    // Notación de matrices especiales
    { display: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}', insert: '\\begin{vmatrix}  &  \\\\  &  \\end{vmatrix}', cursorPos: -24 },
    { display: '\\begin{Vmatrix} a & b \\\\ c & d \\end{Vmatrix}', insert: '\\begin{Vmatrix}  &  \\\\  &  \\end{Vmatrix}', cursorPos: -24 },

    // Matrices para sistemas de ecuaciones
    { display: '\\begin{cases} x + y = 1 \\\\ y - z = 2 \\end{cases}', insert: '\\begin{cases}  &  \\\\  &  \\end{cases}', cursorPos: -22 },

    // Notación de vectores
    { display: '\\vec{v}', insert: '\\vec{}', cursorPos: -1 },
    { display: '\\mathbf{v}', insert: '\\mathbf{}', cursorPos: -1 },

    // Notación de traza
    { display: '\\text{Tr}(A)', insert: '\\text{Tr}()', cursorPos: -1 },

    // Operaciones sobre matrices
    { display: 'A + B', insert: 'A + B' },
    { display: 'A - B', insert: 'A - B' },
    { display: 'AB', insert: 'AB' },

    // Matriz transpuesta
    { display: 'A^T', insert: 'A^T' },
    { display: 'A^H', insert: 'A^H' },
    
    // Inversa de una matriz
    { display: 'A^{-1}', insert: 'A^{-1}' }
];
