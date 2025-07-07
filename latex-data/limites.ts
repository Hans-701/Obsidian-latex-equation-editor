import type { LatexSymbol } from "./types";

export const limitesSymbols: LatexSymbol[] = [
    // Límites simples
    { display: '\\lim', insert: '\\lim' },  // No necesita cursorPos, es un símbolo simple
    
    // Límites con notación
    { display: '\\lim_{x \\to a}', insert: '\\lim_{x \\to }', cursorPos: -1 }, // Aquí el cursor debe ir entre los corchetes
    { display: '\\lim_{n \\to \\infty}', insert: '\\lim_{n \\to \\infty}' },

    // Límites con funciones
    { display: '\\lim_{x \\to a} f(x)', insert: '\\lim_{x \\to } f(x)', cursorPos: -6 }, // El cursor debe estar dentro de la función
    { display: '\\lim_{n \\to \\infty} f(n)', insert: '\\lim_{n \\to \\infty} f(n)' },

    // Límites dobles y múltiples
    { display: '\\lim_{x \\to a} \\lim_{y \\to b} f(x, y)', insert: '\\lim_{x \\to } \\lim_{y \\to } f(x, y)' },
    { display: '\\lim_{x \\to a} \\lim_{y \\to b} \\lim_{z \\to c} f(x, y, z)', insert: '\\lim_{x \\to } \\lim_{y \\to } \\lim_{z \\to } f(x, y, z)' },

    // Límites con infinito
    { display: '\\lim_{x \\to \\infty} f(x)', insert: '\\lim_{x \\to \\infty} f(x)' },
    { display: '\\lim_{x \\to -\\infty} f(x)', insert: '\\lim_{x \\to -\\infty} f(x)' },

    // Límites de funciones con notación avanzada
    { display: '\\lim_{x \\to a} \\frac{f(x)}{g(x)}', insert: '\\lim_{x \\to } \\frac{f(x)}{g(x)}', cursorPos: -19 },
    { display: '\\lim_{x \\to 0} \\sin(x)', insert: '\\lim_{x \\to 0} \\sin(x)' },

    // Límites con sumatorias y productos
    { display: '\\lim_{n \\to \\infty} \\sum_{i=1}^{n} a_i', insert: '\\lim_{n \\to \\infty} \\sum_{}^{} a_i', cursorPos: -5 },
    { display: '\\lim_{n \\to \\infty} \\prod_{i=1}^{n} b_i', insert: '\\lim_{n \\to \\infty} \\prod_{}^{} b_i', cursorPos: -5 },

    // Límites con notación de infinito
    { display: '\\lim_{x \\to \\infty} \\int_{a}^{b} f(x) dx', insert: '\\lim_{x \\to \\infty} \\int_{}^{} f(x) dx', cursorPos: -9 },
    { display: '\\lim_{x \\to -\\infty} \\int_{a}^{b} f(x) dx', insert: '\\lim_{x \\to -\\infty} \\int_{}^{} f(x) dx', cursorPos: -9 },

    // Límites en notación matemática avanzada
    { display: '\\lim_{x \\to a} \\frac{1}{x-a}', insert: '\\lim_{x \\to } \\frac{1}{x-}', cursorPos: -1 },
    { display: '\\lim_{x \\to a} e^x', insert: '\\lim_{x \\to } e^x', cursorPos: -5 }
];
