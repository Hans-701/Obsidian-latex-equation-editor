# LaTeX Suite para Obsidian

**LaTeX Suite** es un complemento para Obsidian diseñado para transformar la escritura de ecuaciones LaTeX en una experiencia fluida, intuitiva y potente. Olvídate de la fricción de recordar comandos complejos; con una interfaz inteligente y adaptable, podrás concentrarte en lo que realmente importa: tus ecuaciones.

## Características Principales

✨ **Panel de Ecuaciones Inteligente y Adaptativo**
Un panel de control completo que aparece automáticamente al entrar en un entorno LaTeX (`$...$` o `$$...$$`). Su posición es inteligente: se mostrará debajo de tu ecuación si hay espacio, o se moverá elegantemente arriba si estás al final de la página, asegurando que nunca pierdas de vista tu trabajo.

📚 **Organización por Pestañas**
Cientos de símbolos y comandos están organizados en categorías claras y accesibles mediante pestañas. Encuentra rápidamente lo que necesitas, desde "Frecuentes" y "Símbolos Griegos" hasta "Matrices" y "Delimitadores", sin sentirte abrumado.

⚡ **Vista Previa Integrada y Dinámica**
Obtén una vista renderizada de tu ecuación en tiempo real. La vista previa está integrada en el panel y, al igual que este, se adapta: se muestra en la parte superior para un acceso rápido, pero se mueve a la parte inferior cuando el panel aparece arriba, manteniéndose siempre cerca de la acción.

🧠 **Función "Envolver" y Cursor Inteligente**
Acelera tu flujo de trabajo de manera exponencial. Selecciona un texto como `x^2`, haz clic en el botón de fracción, y el plugin lo convertirá automáticamente en `\frac{x^2}{}`. El cursor se posicionará de forma inteligente en el siguiente campo vacío, listo para que continúes. Esto también funciona para delimitadores, raíces y otros comandos.

🚀 **Auto-Espaciado para Símbolos**
Al insertar símbolos simples como `\beta` o `\int`, el plugin añade automáticamente un espacio al final, permitiéndote seguir escribiendo sin interrumpir la sintaxis de LaTeX.

## Cómo Funciona

El plugin utiliza la API del editor de Obsidian y un **ViewPlugin** de CodeMirror 6 para monitorear el editor.

-   **Detección de Contexto**: Identifica si el cursor está dentro de un entorno matemático (`$$...$$` o `$..$`), reconociendo la totalidad del bloque para un posicionamiento preciso.
-   **Inicialización Diferida (Lazy Initialization)**: Para garantizar un rendimiento óptimo y cero errores de carga, la interfaz gráfica solo se construye la primera vez que se necesita, asegurando que todos los componentes de Obsidian estén listos.
-   **Posicionamiento Adaptativo**: El plugin calcula el espacio disponible en la ventana y decide si mostrar el panel arriba o abajo de tu bloque de ecuación, reordenando sus propios elementos internos para una máxima comodidad.
-   **Inserción Inteligente**: Al hacer clic en un botón, el plugin comprueba si hay texto seleccionado para aplicar la lógica de "envolver". Si no, inserta el comando y posiciona el cursor de forma inteligente usando la información definida en sus archivos de datos modulares.