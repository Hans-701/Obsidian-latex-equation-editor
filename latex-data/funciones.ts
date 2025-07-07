import type { LatexSymbol } from "./types";

export const funcionesSymbols: LatexSymbol[] = [
    // Funciones trigonométricas
    { display: '\\sin{x}', insert: '\\sin{}', cursorPos: -1 },
    { display: '\\cos{x}', insert: '\\cos{}', cursorPos: -1 },
    { display: '\\tan{x}', insert: '\\tan{}', cursorPos: -1 },
    { display: '\\cot{x}', insert: '\\cot{}', cursorPos: -1 },
    { display: '\\sec{x}', insert: '\\sec{}', cursorPos: -1 },
    { display: '\\csc{x}', insert: '\\csc{}', cursorPos: -1 },

    // Funciones hiperbólicas
    { display: '\\sinh{x}', insert: '\\sinh{}', cursorPos: -1 },
    { display: '\\cosh{x}', insert: '\\cosh{}', cursorPos: -1 },
    { display: '\\tanh{x}', insert: '\\tanh{}', cursorPos: -1 },

    // Funciones logarítmicas
    { display: '\\log{x}', insert: '\\log{}', cursorPos: -1 },
    { display: '\\ln{x}', insert: '\\ln{}', cursorPos: -1 },
    { display: '\\lg{x}', insert: '\\lg{}', cursorPos: -1 },

    // Funciones exponenciales
    { display: '\\exp{x}', insert: '\\exp{}', cursorPos: -1 },
    { display: '\\deg{x}', insert: '\\deg{}', cursorPos: -1 },

    // Funciones comunes
    { display: '\\det{A}', insert: '\\det{}', cursorPos: -1 },
    { display: '\\gcd{a, b}', insert: '\\gcd{}', cursorPos: -1 },

    // Funciones avanzadas
    { display: '\\text{max}(x, y)', insert: '\\text{max}()', cursorPos: -1 },
    { display: '\\text{min}(x, y)', insert: '\\text{min}()', cursorPos: -1 },

    // Derivadas
    { display: '\\frac{d}{dx}', insert: '\\frac{d}{dx}' },
    { display: '\\frac{d^2}{dx^2}', insert: '\\frac{d^2}{dx^2}' },

    // Notación de límite
    { display: '\\lim_{x \\to \\infty}', insert: '\\lim_{x \\to \\infty}' }
];
