# Consideraciones de diseño

Puede utilizar espacios de nombres o módulos para la organización de código y ambos pueden contener código y declaraciones.

Aunque los espacios de nombres son fáciles de usar para implementaciones sencillas y no dependen de un cargador de módulos, los módulos ofrecen algunas ventajas adicionales que los espacios de nombres no proporcionan. Módulos:

Declare sus dependencias.
Proporcionan una mejor reutilización del código.
Ofrecen un aislamiento fuerte.
Ocultan las instrucciones internas de las definiciones de módulo y muestran solo los métodos y parámetros asociados al componente declarado.
Proporcionan una mejor compatibilidad con las herramientas para la unión.
Se recomiendan sobre los espacios de nombres para las aplicaciones Node.js porque los módulos son los predeterminados.
Pueden resolver los problemas de flujo de JavaScript de nivel superior porque se crea una instancia de una referencia a un método o una clase externos solo en la invocación del método.
Y, a partir de ECMAScript 2015, los módulos son parte nativa del lenguaje y todas las implementaciones del motor compatibles los deben admitir. Por lo tanto, para los proyectos nuevos, se recomiendan los módulos para la organización del código.

En la tabla siguiente se resumen y se comparan los módulos y los espacios de nombres.

`módulo` vs `namespace`
Use módulos para organizar el código en archivos independientes para la agrupación lógica de la funcionalidad.
Use espacios de nombres para organizar el código en archivos independientes para la agrupación lógica de la funcionalidad.

Los módulos se ejecutan en su ámbito local, no en el ámbito global.
Los espacios de nombres módulos se ejecutan en su ámbito local, no en el ámbito global.

Los módulos son declarativos; las relaciones entre los módulos se especifican en términos de importaciones y exportaciones en el nivel de archivo.
Los espacios de nombres no pueden declarar sus dependencias.

Un módulo se define mediante el uso de la palabra clave export o import dentro de un archivo. Cualquier archivo que contenga una importación o exportación de nivel superior se considera un módulo.
Un espacio de nombres se define mediante la palabra clave namespace dentro de un archivo. Las instrucciones de espacio de nombres se pueden anidar y pueden abarcar varios archivos.

Para exponer componentes de módulo individuales fuera del módulo, use la palabra clave export. Para exponer componentes de espacio de nombres individuales fuera del espacio de nombres, use la palabra clave export.

Para usar un componente de un módulo en otro, use la palabra clave import.
Para usar un componente de un espacio de nombres en otro archivo TypeScript, agregue una instrucción reference con la sintaxis de barra diagonal triple (///).

Para compilar un módulo y todos sus archivos dependientes, use el comando tsc --module. Para compilar archivos TypeScript que contienen espacios de nombres y todos sus archivos dependientes en archivos JavaScript individuales, use el comando tsc.

No es posible tener módulos de varios archivos compilados en un único módulo.
Para compilar todos los archivos TypeScript que contienen espacios de nombres en un único archivo JavaScript, use el comando tsc --outFile.

Los módulos importan otro módulo mediante una API de cargador de módulos. La API se especifica al compilar el módulo.
Los espacios de nombres se cargan especificando los nombres de archivo . js (en orden) mediante la etiqueta <script> de la página HTML.

En los módulos, puede volver a exportar los componentes ya sea mediante su nombre original o cambiándoles el nombre.
En los espacios de nombres, no puede volver a exportar componentes ni cambiarles el nombre.
