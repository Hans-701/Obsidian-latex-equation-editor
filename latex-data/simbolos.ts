// en latex-data/simbolos.ts

import type { LatexSymbol } from "./types";

export const simbolosSymbols: LatexSymbol[] = [
    // Símbolos de conjuntos
    { display: '\\in', insert: '\\in' },
    { display: '\\notin', insert: '\\notin' },
    { display: '\\subset', insert: '\\subset' },
    { display: '\\supset', insert: '\\supset' },
    { display: '\\cup', insert: '\\cup' },
    { display: '\\cap', insert: '\\cap' },

    // Relaciones matemáticas
    { display: '\\leq', insert: '\\leq' },
    { display: '\\geq', insert: '\\geq' },
    { display: '\\neq', insert: '\\neq' },
    { display: '\\approx', insert: '\\approx' },
    { display: '\\equiv', insert: '\\equiv' },

    // Operadores matemáticos
    { display: '\\pm', insert: '\\pm' },
    { display: '\\mp', insert: '\\mp' },
    { display: '\\times', insert: '\\times' },
    { display: '\\div', insert: '\\div' },
    { display: '\\cdot', insert: '\\cdot' },

    // Operadores de límites y grandes
    { display: '\\lim', insert: '\\lim' },
    { display: '\\limsup', insert: '\\limsup' },
    { display: '\\liminf', insert: '\\liminf' },

    // Notación de infinito
    { display: '\\infty', insert: '\\infty' },

    // Notación de cardinalidad y tamaños
    { display: '\\aleph', insert: '\\aleph' },

    // Símbolos de probabilidad
    { display: '\\mathbb{P}', insert: '\\mathbb{P}' },
    { display: '\\mathbb{E}', insert: '\\mathbb{E}' },

    // Símbolos de álgebra abstracta
    { display: '\\mathbb{Z}', insert: '\\mathbb{Z}' },
    { display: '\\mathbb{N}', insert: '\\mathbb{N}' },
    { display: '\\mathbb{Q}', insert: '\\mathbb{Q}' },
    { display: '\\mathbb{R}', insert: '\\mathbb{R}' },
    { display: '\\mathbb{C}', insert: '\\mathbb{C}' },

    // Lógica matemática
    { display: '\\forall', insert: '\\forall' },
    { display: '\\exists', insert: '\\exists' },
    { display: '\\neg', insert: '\\neg' },
    { display: '\\implies', insert: '\\implies' },

    // Funciones del conjunto de números reales
    { display: '\\Re', insert: '\\Re' },
    { display: '\\Im', insert: '\\Im' },

    // Notación de divisibilidad
    { display: '\\mid', insert: '\\mid' },
    { display: '\\nmid', insert: '\\nmid' },

    // Notación de divisibilidad
    { display: '\\parallel', insert: '\\parallel' },
    { display: '\\perp', insert: '\\perp' },

    // Símbolos de funciones avanzadas
    { display: '\\arg', insert: '\\arg{}', cursorPos: -1 },
    { display: '\\gcd', insert: '\\gcd{}', cursorPos: -1 },

    // Notación de desigualdades
    { display: '\\ll', insert: '\\ll' },
    { display: '\\gg', insert: '\\gg' },

    // Otros símbolos generales
    { display: '\\nabla', insert: '\\nabla' },
    { display: '\\partial', insert: '\\partial' },
    { display: '\\emptyset', insert: '\\emptyset' },
    { display: '\\bot', insert: '\\bot' },

    // Notación matemática avanzada
    { display: '\\therefore', insert: '\\therefore' },
    { display: '\\because', insert: '\\because' }
];
