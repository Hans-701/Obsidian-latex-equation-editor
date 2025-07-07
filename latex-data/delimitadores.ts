import type { LatexSymbol } from "./types";

export const delimitadoresSymbols: LatexSymbol[] = [
    // Paréntesis
    { display: '\\left( \\right)', insert: '\\left(  \\right)', cursorPos: -8 },
    { display: '\\left[ \\right]', insert: '\\left[  \\right]', cursorPos: -8 },
    { display: '\\left\\{ \\right\\}', insert: '\\left\\{  \\right\\}', cursorPos: -9 },

    // Ángulos
    { display: '\\left\\langle \\right\\rangle', insert: '\\left\\langle  \\right\\rangle', cursorPos: -14 },

    // Barras y líneas
    { display: '\\left| \\right|', insert: '\\left|  \\right|', cursorPos: -8 },
    { display: '\\left\\| \\right\\|', insert: '\\left\\|  \\right\\|', cursorPos: -9 },

    // Pisos y techos
    { display: '\\left\\lfloor \\right\\rfloor', insert: '\\left\\lfloor  \\right\\rfloor', cursorPos: -14 },
    { display: '\\left\\lceil \\right\\rceil', insert: '\\left\\lceil  \\right\\rceil', cursorPos: -13 },

    // Otros delimitadores
    { display: '\\left< \\right>', insert: '\\left<  \\right>', cursorPos: -8 },
    { display: '\\left\\lbrace \\right\\rbrace', insert: '\\left\\lbrace  \\right\\rbrace', cursorPos: -14 },
    { display: '\\left\\lceil \\right\\rceil', insert: '\\left\\lceil  \\right\\rceil', cursorPos: -13 },

    // Delimitadores grandes
    { display: '\\big( \\big)', insert: '\\big(  \\big)', cursorPos: -6 },
    { display: '\\Big( \\Big)', insert: '\\Big(  \\Big)', cursorPos: -6 },
    { display: '\\bigg( \\bigg)', insert: '\\bigg(  \\bigg)', cursorPos: -7 },
    { display: '\\Bigg( \\Bigg)', insert: '\\Bigg(  \\Bigg)', cursorPos: -7 }
];
