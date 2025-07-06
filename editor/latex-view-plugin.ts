import { EditorView, ViewUpdate, ViewPlugin } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { renderMath, finishRenderMath } from 'obsidian';

export const buildLatexViewPlugin = (toolbar: HTMLDivElement, previewPanel: HTMLDivElement) => {
    return ViewPlugin.fromClass(class {
        private animationFrame: number = 0;

        update(update: ViewUpdate) {
            // Se añade !update.focusChanged para que la lógica se ejecute también cuando cambia el foco
            if (!update.docChanged && !update.selectionSet && !update.geometryChanged && !update.focusChanged) return;
            if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
            this.animationFrame = requestAnimationFrame(() => this.handleVisibility(update.view));
        }

        handleVisibility(view: EditorView) {
            if (!view.dom.isConnected) return;
            
            const latexBlock = this.getLatexBlock(view.state);

            if (latexBlock && view.hasFocus) {
                toolbar.removeClass('hidden');
                previewPanel.removeClass('hidden');
                
                previewPanel.empty();
                const mathEl = renderMath(latexBlock.content, latexBlock.display);
                previewPanel.appendChild(mathEl);
                finishRenderMath();
                
                const coords = view.coordsAtPos(view.state.selection.main.head);
                if (coords) {
                    // --- INICIO DE LA NUEVA LÓGICA DE POSICIONAMIENTO ---

                    // 1. Posiciona la barra de botones DEBAJO de la línea de texto.
                    const toolbarTop = coords.bottom + 10; // 10px de margen inferior
                    toolbar.style.top = `${toolbarTop}px`;
                    toolbar.style.left = `${coords.left}px`;

                    // 2. Posiciona el panel de vista previa DEBAJO de la barra de botones.
                    // Se calcula usando la posición de la barra + su altura + un margen.
                    const previewTop = toolbarTop + toolbar.offsetHeight + 5; // 5px de margen
                    previewPanel.style.top = `${previewTop}px`;
                    previewPanel.style.left = `${coords.left}px`;

                    // --- FIN DE LA NUEVA LÓGICA DE POSICIONAMIENTO ---
                }
            } else {
                toolbar.addClass('hidden');
                previewPanel.addClass('hidden');
            }
        }

        getLatexBlock(state: EditorState): { from: number, to: number, content: string, display: boolean } | null {
            const pos = state.selection.main.head;
            const doc = state.doc.toString();

            const displayRegex = /\$\$(.*?)\$\$/gs;
            let displayMatch;
            while ((displayMatch = displayRegex.exec(doc)) !== null) {
                const from = displayMatch.index;
                const to = from + displayMatch[0].length;
                if (pos >= from + 2 && pos <= to - 2) {
                    return { from, to, content: displayMatch[1], display: true };
                }
            }

            const inlineRegex = /(?<!\$)\$([^\$\n]*?)\$(?!\$)/g;
            let inlineMatch;
            while ((inlineMatch = inlineRegex.exec(doc)) !== null) {
                const from = inlineMatch.index;
                const to = from + inlineMatch[0].length;
                if (pos >= from + 1 && pos <= to - 1) {
                    return { from, to, content: inlineMatch[1], display: false };
                }
            }
        
            return null;
        }

        destroy() {
            if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
        }
    });
}