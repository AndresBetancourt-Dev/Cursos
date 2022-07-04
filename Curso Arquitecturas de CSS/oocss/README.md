# Object-Oriented CSS (OOCSS)

Fue desarrollada por Nicole Sullivan en 2008 y se basa en dos principios básicos:

Separar la estructura del diseño (en inglés lo describen como skin, piel).

Separar contenedor del contenido.
Igual que cualquier lenguaje de programación orientado a objetos la finalidad es la re-utilización, incrementar la velocidad y eficiencia de nuestras hojas de estilo haciéndolas más fáciles de mantener.

## SEPARAR LA ESTRUCTURA DEL DISEÑO
Casi todos los elementos en una página web tienen diferentes características visuales (es decir, «pieles») que se repiten en diferentes contextos. Por otro lado, otras características generalmente invisibles («estructura») se repiten del mismo modo.

Cuando estas características diferentes se abstraen en módulos basados en clases, se convierten en reutilizables y se pueden aplicar a cualquier.

Lo mejor es verlo con un ejemplo:

Ahora todos los elementos usan clases, los estilos comunes se combinan en una «piel» re-utilizable y nada se repite innecesariamente. Sólo tenemos que aplicar la clase de .skin a todos los elementos y el resultado será el mismo que en el primer código, excepto con menos código y una posibilidad para su posterior re-utilización.