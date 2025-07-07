import type { LatexSymbol } from "./types";

export const commonSymbols: LatexSymbol[] = [
    // Fracciones
    { display: '\\frac{a}{b}', insert: '\\frac{}{}', cursorPos: -3 },
    { display: '\\dfrac{a}{b}', insert: '\\dfrac{}{}', cursorPos: -3 },

    // Exponentes
    { display: 'x^{a}', insert: '^{}', cursorPos: -1 },

    // Subíndices
    { display: 'x_{a}', insert: '_{}', cursorPos: -1 },

    // Raíces
    { display: '\\sqrt{x}', insert: '\\sqrt{}', cursorPos: -1 },
    { display: '\\sqrt[n]{x}', insert: '\\sqrt[]{}', cursorPos: -1 },

    // Símbolos comunes
    { display: '\\infty', insert: '\\infty' },
    { display: '\\pm', insert: '\\pm' },
    { display: '\\times', insert: '\\times' },
    { display: '\\div', insert: '\\div' },
    { display: '\\cdot', insert: '\\cdot' },

    // Sumas y productos
    { display: '\\sum', insert: '\\sum' },
    { display: '\\prod', insert: '\\prod' },
    { display: '\\int', insert: '\\int' },

    // Funciones trigonométricas
    { display: '\\sin{x}', insert: '\\sin{}', cursorPos: -1 },
    { display: '\\cos{x}', insert: '\\cos{}', cursorPos: -1 },
    { display: '\\tan{x}', insert: '\\tan{}', cursorPos: -1 },

    // Notación científica
    { display: '10^{n}', insert: '10^{}', cursorPos: -1 },
    { display: 'e^{x}', insert: 'e^{}', cursorPos: -1 },

    // Operadores
    { display: '\\leq', insert: '\\leq' },
    { display: '\\geq', insert: '\\geq' },
    { display: '\\neq', insert: '\\neq' },

    // Combinatoria
    { display: 'C_{n}^{r}', insert: 'C_{}^{}', cursorPos: -1 },
    { display: 'P_{n}^{r}', insert: 'P_{}^{}', cursorPos: -1 },

    // Álgebra lineal y matrices
    { display: '\\det{A}', insert: '\\det{}', cursorPos: -1 },
    { display: '\\text{det}(A)', insert: '\\text{det}()', cursorPos: -1 },
    { display: '\\vec{v}', insert: '\\vec{}', cursorPos: -1 },

    // Logaritmos
    { display: '\\log{x}', insert: '\\log{}', cursorPos: -1 },
    { display: '\\ln{x}', insert: '\\ln{}', cursorPos: -1 },

    // Derivadas e integrales
    { display: '\\frac{d}{dx}', insert: '\\frac{d}{dx}' },
    { display: '\\frac{d^2}{dx^2}', insert: '\\frac{d^2}{dx^2}' },

    // Notación de límite
    { display: '\\lim_{x \\to 0}', insert: '\\lim_{}^{}', cursorPos: -1 },

    // Ángulos y funciones trigonométricas avanzadas
    { display: '\\sec{x}', insert: '\\sec{}', cursorPos: -1 },
    { display: '\\csc{x}', insert: '\\csc{}', cursorPos: -1 },
    { display: '\\cot{x}', insert: '\\cot{}', cursorPos: -1 },

    // Números complejos
    { display: '\\mathbb{C}', insert: '\\mathbb{C}' },
    { display: '\\mathbb{R}', insert: '\\mathbb{R}' },
    { display: '\\mathbb{N}', insert: '\\mathbb{N}' },

    // Otras expresiones comunes
    { display: '\\ce{H2O}', insert: '\\ce{}', cursorPos: -1 },
    
    // Operadores grandes
    { display: '\\displaystyle \\sum', insert: '\\displaystyle \\sum' },
    { display: '\\displaystyle \\prod', insert: '\\displaystyle \\prod' }
];
