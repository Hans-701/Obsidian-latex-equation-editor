// en main.ts

import { Plugin, MarkdownView, renderMath, finishRenderMath } from 'obsidian';
import { buildLatexViewPlugin } from './editor/latex-view-plugin';
import { SYMBOL_SECTIONS } from './latex-data';
import type { LatexSymbol } from './latex-data/types';

export default class LaTeXSuitePlugin extends Plugin {
    // Estas propiedades se llenarán más tarde
    public latexSuitePanel: HTMLDivElement;
    public previewEl: HTMLDivElement;
    
    private tabsContainer: HTMLDivElement;
    private buttonsContainer: HTMLDivElement;
    private activeSectionName: string = SYMBOL_SECTIONS[0].name;

    async onload() {
        console.log('Cargando el plugin LaTeX Suite v2...');

        // Solo registramos el ViewPlugin. No creamos ninguna UI aquí.
        // Le pasamos 'this' para que el ViewPlugin pueda llamar a nuestras funciones.
        this.registerEditorExtension(buildLatexViewPlugin(this));

        this.addCommand({
            id: 'insert-latex-equation-block',
            name: 'Insertar bloque de ecuación LaTeX',
            editorCallback: (editor) => {
                const currentPos = editor.getCursor();
                editor.replaceSelection(`$$\n\t\n$$`);
                editor.setCursor(currentPos.line + 1, 1);
            }
        });
    }

    onunload() {
        console.log('Descargando el plugin LaTeX Suite...');
        this.latexSuitePanel?.remove();
    }

    // Función pública que el ViewPlugin llamará para construir la UI
    public initializeUI(): void {
        // Si ya está creada, no hace nada.
        if (this.latexSuitePanel) return;

        console.log("Construyendo la UI de LaTeX Suite por primera vez...");
        this.latexSuitePanel = document.body.createEl('div', { cls: 'latex-suite-panel hidden' });
        this.previewEl = this.latexSuitePanel.createEl('div', { cls: 'latex-preview-panel' });
        this.tabsContainer = this.latexSuitePanel.createEl('div', { cls: 'latex-tabs-container' });
        this.buttonsContainer = this.latexSuitePanel.createEl('div', { cls: 'latex-buttons-container' });

        SYMBOL_SECTIONS.forEach(section => {
            const tabButton = this.tabsContainer.createEl('button', { text: section.name, cls: 'latex-tab' });
            if (section.name === this.activeSectionName) tabButton.addClass('active');

            tabButton.addEventListener('mousedown', (event) => {
                event.preventDefault();
                this.activeSectionName = section.name;
                this.tabsContainer.querySelectorAll('.latex-tab').forEach(btn => btn.removeClass('active'));
                tabButton.addClass('active');
                this.renderButtonsForSection(section.name);
            });
        });

        this.renderButtonsForSection(this.activeSectionName);
    }
    
    private renderButtonsForSection(sectionName: string): void {
        this.buttonsContainer.empty();
        const section = SYMBOL_SECTIONS.find(s => s.name === sectionName);
        if (!section) return;

        section.symbols.forEach(symbol => {
            const button = this.buttonsContainer.createEl('button', { cls: 'latex-symbol-button' });
            // Esta es la llamada que daba error. Ahora es segura.
            const mathEl = renderMath(symbol.display, false);
            button.appendChild(mathEl);
            finishRenderMath();

            button.addEventListener('mousedown', (event) => {
                event.preventDefault();
                this.insertSymbol(symbol);
            });
        });
    }

    private insertSymbol(symbol: LatexSymbol): void {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (view) {
            const editor = view.editor;
            const cursor = editor.getCursor("from");
            const selection = editor.getSelection();

            if (selection && symbol.cursorPos) {
                const insertionPoint = symbol.insert.length + symbol.cursorPos;
                const part1 = symbol.insert.substring(0, insertionPoint);
                const part2 = symbol.insert.substring(insertionPoint);
                const textToInsert = part1 + selection + part2;
                editor.replaceSelection(textToInsert);
                const newCursorCh = cursor.ch + part1.length + selection.length;
                editor.setCursor({ line: cursor.line, ch: newCursorCh });
            } else if (symbol.cursorPos) {
                editor.replaceSelection(symbol.insert);
                const newPos = { line: cursor.line, ch: cursor.ch + symbol.insert.length + symbol.cursorPos };
                editor.setCursor(newPos);
            } else {
                const textToInsert = symbol.insert + ' ';
                editor.replaceSelection(textToInsert);
            }
            editor.focus();
        }
    }
}