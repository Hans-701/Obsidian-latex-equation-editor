# LaTeX Suite para Obsidian

**LaTeX Suite** es un complemento para Obsidian diseñado para mejorar y simplificar la experiencia de escritura de ecuaciones LaTeX. El objetivo es reducir la curva de aprendizaje y la fricción de tener que recordar y escribir manualmente todos los comandos, ofreciendo una interfaz visual e interactiva en tiempo real.

## Características Principales

✨ **Barra de Herramientas Flotante:** Una barra de herramientas contextual aparece automáticamente cuando el cursor entra en un bloque de LaTeX (`$...$` o `$$...$$`).

📚 **Símbolos por Categorías:** Los botones están organizados para un acceso rápido y fácil a letras griegas, operadores, fracciones y más. (Nota: esta funcionalidad se puede ampliar en el futuro).

⚡ **Vista Previa en Vivo:** Obtén una vista renderizada de tu ecuación justo debajo de la línea que estás editando, la cual se actualiza instantáneamente con cada cambio.

🧠 **Cursor Inteligente:** Al insertar comandos complejos como `\frac{}{}` o `\sqrt{}`, el cursor se posiciona automáticamente dentro de las llaves, listo para que continúes escribiendo.

🚀 **Comando Rápido:** Usa la paleta de comandos (`Ctrl/Cmd + P`) para insertar rápidamente un bloque de ecuación (`$$...$$`) y empezar a trabajar.

## Cómo Funciona

El plugin utiliza la API del editor de Obsidian para detectar la posición del cursor. Cuando identifica que estás dentro de un entorno matemático, crea dinámicamente dos elementos flotantes: una barra de herramientas con botones preconfigurados y un panel de vista previa.

-   **Inserción:** Al hacer clic en un botón, el plugin inserta el código LaTeX correspondiente y ajusta la posición del cursor si es necesario. Se utiliza el evento `mousedown` para evitar que el editor pierda el foco, garantizando una experiencia fluida.
-   **Renderizado:** El texto de la ecuación se extrae en tiempo real y se pasa a la función de renderizado nativa de Obsidian, mostrando el resultado al instante en el panel de vista previa.
-   **Posicionamiento:** La posición de la interfaz se calcula dinámicamente usando `requestAnimationFrame` para asegurar un rendimiento óptimo y evitar errores visuales.