// en editor/latex-view-plugin.ts

import { EditorView, ViewUpdate, ViewPlugin } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { renderMath, finishRenderMath } from 'obsidian';

export const buildLatexViewPlugin = (panel: HTMLDivElement, previewPanel: HTMLDivElement) => {
    return ViewPlugin.fromClass(class {
        private animationFrame: number = 0;

        update(update: ViewUpdate) {
            if (!update.docChanged && !update.selectionSet && !update.geometryChanged && !update.focusChanged) return;
            if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
            this.animationFrame = requestAnimationFrame(() => this.handleVisibility(update.view, previewPanel));
        }

        handleVisibility(view: EditorView, previewPanel: HTMLDivElement) {
            if (!view.dom.isConnected) return;
            
            const latexBlock = this.getLatexBlock(view.state);

            if (latexBlock && view.hasFocus) {
                panel.removeClass('hidden');
                
                previewPanel.empty();
                const mathEl = renderMath(latexBlock.content, latexBlock.display);
                previewPanel.appendChild(mathEl);
                finishRenderMath();
                
                // --- INICIO DE LA LÓGICA DE POSICIONAMIENTO DEFINITIVA ---
                const panelHeight = panel.offsetHeight;
                const margin = 15;

                // Obtenemos las coordenadas del bloque COMPLETO, no solo de la línea del cursor
                const startCoords = view.coordsAtPos(latexBlock.from);
                const endCoords = view.coordsAtPos(latexBlock.to);

                // Si el bloque no está renderizado en la vista, no hacemos nada
                if (!startCoords || !endCoords) return;

                const editorRect = view.dom.getBoundingClientRect();
                const spaceBelow = window.innerHeight - endCoords.bottom;

                // ¿Hay suficiente espacio debajo del bloque completo?
                if (spaceBelow > panelHeight + margin) {
                    // Sí -> Posicionamos el panel DEBAJO del bloque
                    panel.style.top = `${endCoords.bottom + margin}px`;
                    panel.style.bottom = 'auto'; // Reseteamos la propiedad 'bottom'
                    panel.removeClass('is-rendered-above');
                } else {
                    // No -> Posicionamos el panel ARRIBA del bloque
                    // Anclamos la parte INFERIOR del panel para que crezca hacia ARRIBA
                    panel.style.bottom = `${window.innerHeight - startCoords.top + margin}px`;
                    panel.style.top = 'auto'; // Reseteamos la propiedad 'top'
                    panel.addClass('is-rendered-above');
                }

                // El centrado horizontal no cambia.
                panel.style.left = `${editorRect.left + (editorRect.width / 2)}px`;
                panel.style.transform = 'translateX(-50%)';
                // --- FIN DE LA LÓGICA DE POSICIONAMIENTO DEFINITIVA ---

            } else {
                panel.addClass('hidden');
            }
        }

        getLatexBlock(state: EditorState): { from: number, to: number, content: string, display: boolean } | null {
            const pos = state.selection.main.head;
            const doc = state.doc.toString();
            
            const displayRegex = /\$\$([\s\S]*?)\$\$/gs;
            let displayMatch;
            while ((displayMatch = displayRegex.exec(doc)) !== null) {
                const from = displayMatch.index;
                const to = from + displayMatch[0].length;
                if (pos >= from && pos <= to) {
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