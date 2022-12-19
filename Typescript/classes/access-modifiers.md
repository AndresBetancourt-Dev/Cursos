# Modificadores de acceso

De forma predeterminada, todos los miembros de clase son de tipo public. Esto significa que son accesibles desde fuera de la clase contenedora. Vio un ejemplo de esto anteriormente cuando devolvía el valor de dos miembros de la clase Car: \_color (una propiedad definida en la clase) y color (un parámetro definido en constructor). A veces, es deseable proporcionar acceso a ambos, pero normalmente querrá controlar el acceso a los datos sin procesar contenidos en la propiedad permitiendo solo el acceso a través del descriptor de acceso get o set.

También puede controlar el acceso a las funciones de método. Por ejemplo, la clase Car contiene una función llamada worker a la que solo se llama desde otras funciones de método dentro de la clase. Llamar a esta función directamente desde fuera de la clase puede provocar resultados no deseados.

En TypeScript, puede controlar la visibilidad de los miembros de la clase agregando la palabra clave public, private o protected antes del nombre del miembro.

Modificador de acceso Descripción
`public` - Si no especifica un modificador de acceso, el valor predeterminado es público. También puede establecer explícitamente el miembro en público mediante la palabra clave public.
`private` - Si modifica el miembro con la palabra clave private, no se puede tener acceso a él desde fuera de la clase contenedora.
`protected` - El modificador protected actúa de forma muy similar al modificador private, con la excepción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas. (Proporcionaremos más información al respecto más adelante en el módulo).

Además, las propiedades se pueden hacer readonly mediante el modificador de solo lectura. Las propiedades de solo lectura solo pueden establecerse cuando se inicializan en su declaración o en constructor.