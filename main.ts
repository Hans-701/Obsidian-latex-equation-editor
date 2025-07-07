import { Plugin, MarkdownView, renderMath, finishRenderMath } from 'obsidian';
import { buildLatexViewPlugin } from './editor/latex-view-plugin';
import { SYMBOL_SECTIONS } from './latex-data';
import type { LatexSymbol } from './latex-data/types';

export default class LaTeXSuitePlugin extends Plugin {
    // Propiedades para los nuevos elementos de la UI
    private latexSuitePanel: HTMLDivElement;
    private previewEl: HTMLDivElement;
    private tabsContainer: HTMLDivElement;
    private buttonsContainer: HTMLDivElement;
    private activeSectionName: string = SYMBOL_SECTIONS[0].name;

    async onload() {
        console.log('Cargando el plugin LaTeX Suite v2...');

        // 1. Construimos toda la nueva estructura de la UI
        this.createLatexSuitePanel();

        // 2. Registramos el ViewPlugin con el panel principal
        this.registerEditorExtension(buildLatexViewPlugin(this.latexSuitePanel, this.previewEl));

        // El comando para insertar un bloque de ecuación no cambia
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
        // Nos aseguramos de eliminar el panel principal del DOM
        this.latexSuitePanel?.remove();
    }

    private createLatexSuitePanel(): void {
        // Contenedor principal
        this.latexSuitePanel = document.body.createEl('div', { cls: 'latex-suite-panel hidden' });

        // Panel de vista previa (ahora va primero)
        this.previewEl = this.latexSuitePanel.createEl('div', { cls: 'latex-preview-panel' });
        this.previewEl.setText('Vista Previa');

        // Contenedor para las pestañas
        this.tabsContainer = this.latexSuitePanel.createEl('div', { cls: 'latex-tabs-container' });

        // Contenedor para los botones (que cambiarán dinámicamente)
        this.buttonsContainer = this.latexSuitePanel.createEl('div', { cls: 'latex-buttons-container' });

        // Creamos las pestañas
        SYMBOL_SECTIONS.forEach(section => {
            const tabButton = this.tabsContainer.createEl('button', {
                text: section.name,
                cls: 'latex-tab'
            });

            // Marcar la primera pestaña como activa
            if (section.name === this.activeSectionName) {
                tabButton.addClass('active');
            }

            // Reemplazamos el evento 'click' por 'mousedown'
            tabButton.addEventListener('mousedown', (event) => {
                // Prevenimos que el editor pierda el foco
                event.preventDefault();

                // El resto de la lógica no cambia
                this.activeSectionName = section.name;
                this.tabsContainer.querySelectorAll('.latex-tab').forEach(btn => {
                    btn.removeClass('active');
                });
                tabButton.addClass('active');
                this.renderButtonsForSection(section.name);
            });
        });

        // Renderizar los botones de la primera sección por defecto
        this.renderButtonsForSection(this.activeSectionName);
    }

    private renderButtonsForSection(sectionName: string): void {
        // Limpiamos los botones anteriores
        this.buttonsContainer.empty();

        const section = SYMBOL_SECTIONS.find(s => s.name === sectionName);
        if (!section) return;

        // Creamos los nuevos botones
        section.symbols.forEach(symbol => {
            const button = this.buttonsContainer.createEl('button', {
                cls: 'latex-symbol-button'
            });

            // LÓGICA CORREGIDA:
            // 1. Llamamos a renderMath con DOS argumentos y guardamos el elemento que devuelve.
            const mathEl = renderMath(symbol.display, false); // 'false' para renderizado en línea

            // 2. Añadimos el elemento renderizado directamente al botón.
            button.appendChild(mathEl);

            // 3. Llamamos a finishRenderMath para asegurar que todo se procese.
            finishRenderMath();

            // Ya no añadimos el atributo 'aria-label'
            // button.setAttribute('aria-label', symbol.insert);  <-- Eliminar esta línea

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

            // CASO 1: Hay texto seleccionado Y el símbolo es complejo (tiene cursorPos)
            if (selection && symbol.cursorPos) {
                const insertionPoint = symbol.insert.length + symbol.cursorPos;
                const part1 = symbol.insert.substring(0, insertionPoint);
                const part2 = symbol.insert.substring(insertionPoint);
                const textToInsert = part1 + selection + part2;
                
                editor.replaceSelection(textToInsert);

                // --- LÓGICA DE CURSOR CORREGIDA ---
                // Posicionamos el cursor justo después del texto que se seleccionó.
                const newCursorCh = cursor.ch + part1.length + selection.length;
                editor.setCursor({ line: cursor.line, ch: newCursorCh });
                // --- FIN DE LA CORRECCIÓN ---

            // CASO 2: No hay selección, pero el símbolo es complejo
            } else if (symbol.cursorPos) {
                editor.replaceSelection(symbol.insert);
                const newPos = {
                    line: cursor.line,
                    ch: cursor.ch + symbol.insert.length + symbol.cursorPos
                };
                editor.setCursor(newPos);

            // CASO 3: Símbolo simple (sin cursorPos), con o sin selección
            } else {
                const textToInsert = symbol.insert + ' ';
                editor.replaceSelection(textToInsert);
            }

            editor.focus();
        }
    }
}
