// en latex-data.ts

import type { SymbolSection } from "./latex-data/types";
import { commonSymbols } from "./latex-data/common";
import { griegosSymbols } from "./latex-data/griegos";
import { simbolosSymbols } from "./latex-data/simbolos";
import { flechasSymbols } from "./latex-data/flechas";
import { delimitadoresSymbols } from "./latex-data/delimitadores";
import { integralesSymbols } from "./latex-data/integrales";
import { limitesSymbols } from "./latex-data/limites";
import { matricesSymbols } from "./latex-data/matrices";
import { funcionesSymbols } from "./latex-data/funciones";
import { acentosSymbols } from "latex-data/acentos";

/**
 * Define el orden y el contenido de las secciones de la barra de herramientas.
 * Cada objeto representa una pestaña en la nueva interfaz.
 */
export const SYMBOL_SECTIONS: SymbolSection[] = [
    {
        name: "Frecuentes",
        symbols: commonSymbols
    },
    {
        name: "Acentos",
        symbols: acentosSymbols
    },
    {
        name: "Griegos",
        symbols: griegosSymbols
    },
    {
        name: "Símbolos",
        symbols: simbolosSymbols
    },
    {
        name: "Flechas",
        symbols: flechasSymbols
    },
    {
        name: "Delimitadores",
        symbols: delimitadoresSymbols
    },
    {
        name: "Integrales",
        symbols: integralesSymbols
    },
    {
        name: "Límites",
        symbols: limitesSymbols
    },
    {
        name: "Matrices",
        symbols: matricesSymbols
    },
    {
        name: "Funciones",
        symbols: funcionesSymbols
    }
];
