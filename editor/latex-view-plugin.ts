// en editor/latex-view-plugin.ts

import { EditorView, ViewUpdate, ViewPlugin } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { renderMath, finishRenderMath } from 'obsidian';
import type LaTeXSuitePlugin from "main";

export const buildLatexViewPlugin = (plugin: LaTeXSuitePlugin) => {
    return ViewPlugin.fromClass(class {
        private animationFrame: number = 0;

        update(update: ViewUpdate) {
            if (!update.docChanged && !update.selectionSet && !update.geometryChanged && !update.focusChanged) return;
            if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
            this.animationFrame = requestAnimationFrame(() => this.handleVisibility(update.view));
        }

        handleVisibility(view: EditorView) {
            if (!view.dom.isConnected) return;
            
            const latexBlock = this.getLatexBlock(view.state);

            if (latexBlock && view.hasFocus) {
                if (!plugin.latexSuitePanel) {
                    plugin.initializeUI();
                }

                const panel = plugin.latexSuitePanel;
                const previewPanel = plugin.previewEl;
                
                panel.removeClass('hidden');
                
                previewPanel.empty();
                const mathEl = renderMath(latexBlock.content, latexBlock.display);
                previewPanel.appendChild(mathEl);
                finishRenderMath();

                const startCoords = view.coordsAtPos(latexBlock.from);
                const endCoords = view.coordsAtPos(latexBlock.to);
                if (!startCoords || !endCoords) return;

                const panelHeight = panel.offsetHeight;
                const margin = 15;
                const editorRect = view.dom.getBoundingClientRect();
                const spaceBelow = window.innerHeight - endCoords.bottom;

                if (spaceBelow > panelHeight + margin) {
                    panel.style.top = `${endCoords.bottom + margin}px`;
                    panel.style.bottom = 'auto';
                    panel.removeClass('is-rendered-above');
                } else {
                    panel.style.bottom = `${window.innerHeight - startCoords.top + margin}px`;
                    panel.style.top = 'auto';
                    panel.addClass('is-rendered-above');
                }
                panel.style.left = `${editorRect.left + (editorRect.width / 2)}px`;
                panel.style.transform = 'translateX(-50%)';

            } else {
                if (plugin.latexSuitePanel) {
                    plugin.latexSuitePanel.addClass('hidden');
                }
            }
        }

        getLatexBlock(state: EditorState): { from: number, to: number, content: string, display: boolean } | null {
            const pos = state.selection.main.head;
            const doc = state.doc.toString();
            
            // LÍNEA CORREGIDA: Se ha eliminado la bandera 's'
            const displayRegex = /\$\$([\s\S]*?)\$\$/g;
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