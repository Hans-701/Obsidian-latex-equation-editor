import { Plugin, MarkdownView } from 'obsidian';
import { buildLatexViewPlugin } from './editor/latex-view-plugin';
import { SYMBOLS } from './latex-data';

export default class LaTeXSuitePlugin extends Plugin {
    private toolbarEl: HTMLDivElement;
    private previewEl: HTMLDivElement; // Añadimos la propiedad para el panel de vista previa

    async onload() {
        console.log('Cargando el plugin LaTeX Suite...');
        
        this.toolbarEl = this.addToolbar();
        
        // 1. Creamos el elemento del panel de vista previa
        this.previewEl = document.body.createEl('div', { cls: 'latex-preview-panel hidden' });
        // Texto de prueba para saber que funciona
        this.previewEl.setText('Aquí irá la vista previa...');

        // 2. Pasamos AMBOS elementos a nuestro ViewPlugin
        this.registerEditorExtension(buildLatexViewPlugin(this.toolbarEl, this.previewEl));

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
        this.toolbarEl.remove();
        this.previewEl.remove(); // Nos aseguramos de eliminar también el panel
    }

    private addToolbar(): HTMLDivElement {
        // ... (El código de esta función no cambia)
        const toolbar = document.body.createEl('div', { cls: 'latex-toolbar hidden' });

        SYMBOLS.forEach(symbol => {
            const button = toolbar.createEl('button', { text: symbol.display });
            
            button.addEventListener('mousedown', (event) => {
                event.preventDefault(); 

                const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (view) {
                    const editor = view.editor;
                    const cursor = editor.getCursor();
                    editor.replaceSelection(symbol.insert);
                    if (symbol.cursorPos) {
                        const newPos = {
                            line: cursor.line,
                            ch: cursor.ch + symbol.cursorPos
                        };
                        editor.setCursor(newPos);
                    }
                    editor.focus();
                }
            });
        });

        document.body.appendChild(toolbar);
        return toolbar;
    }
}