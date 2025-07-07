import type { LatexSymbol } from "./types";

export const integralesSymbols: LatexSymbol[] = [
    // Integrales simples
    { display: '\\int', insert: '\\int' },
    { display: '\\iint', insert: '\\iint' },
    { display: '\\iiint', insert: '\\iiint' },
    { display: '\\oint', insert: '\\oint' },

    // Integrales con límites
    { display: '\\int_a^b', insert: '\\int_{}^{}', cursorPos: -1 },
    { display: '\\int_0^{\\infty}', insert: '\\int_0^{\\infty}' },

    // Sumatorias
    { display: '\\sum_{i=1}^{n}', insert: '\\sum_{}^{}', cursorPos: -1 },
    { display: '\\prod_{i=1}^{n}', insert: '\\prod_{}^{}', cursorPos: -1 },

    // Producto y coproducción
    { display: '\\prod', insert: '\\prod' },
    { display: '\\coprod', insert: '\\coprod' },

    // Sumas y productos con notación avanzada
    { display: '\\int_{a}^{b} f(x) dx', insert: '\\int_{}^{} f(x) dx', cursorPos: -9 },
    { display: '\\sum_{i=1}^n a_i', insert: '\\sum_{}^{} a_i', cursorPos: -5 },

    // Integrales de línea y superficie
    { display: '\\int_{C} f(x) dx', insert: '\\int_{C} f(x) dx' },
    { display: '\\int_{S} f(x) dS', insert: '\\int_{S} f(x) dS' },

    // Operadores de conjunto
    { display: '\\bigcup', insert: '\\bigcup' },
    { display: '\\bigcap', insert: '\\bigcap' },
    { display: '\\bigsqcup', insert: '\\bigsqcup' },

    // Operadores de límites y sumas
    { display: '\\int_{a}^{b} \\sum_{i=1}^n', insert: '\\int_{}^{} \\sum_{}^{}', cursorPos: -1 },
    { display: '\\sum_{i=1}^n \\int_{}^{}', insert: '\\sum_{}^{} \\int_{}^{}', cursorPos: -1 },

    // Notación de integrales múltiples
    { display: '\\int \\int f(x, y) dx dy', insert: '\\int \\int f(x, y) dx dy' },
    { display: '\\int \\int \\int f(x, y, z) dx dy dz', insert: '\\int \\int \\int f(x, y, z) dx dy dz' }
];
