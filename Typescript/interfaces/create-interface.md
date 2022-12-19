# Ejercicio: Declaración de una interfaz en TypeScript y creación de una instancia de esta

Para declarar una interfaz, empiece con la palabra clave interface, seguida del nombre de la interfaz (el identificador). El nombre de la interfaz no puede ser uno de los nombres de tipos predefinidos en el sistema de tipos. Por convención, los nombres de interfaces están en PascalCase.

Las instrucciones de codificación de TypeScript sugieren que las interfaces no empiecen por la letra I.

Después, defina las propiedades (o los miembros) de la interfaz y su tipo. Las propiedades pueden ser obligatorias, opcionales o de solo lectura.

```ts
interface Person {
  firstName: string; //Required
  lastName?: string; //Optional
  readonly otherName: string;
}
```
`Obligatorio` - Todas las propiedades son necesarias, a menos que se especifique lo contrario.

`Opcional` - Agregue un signo de interrogación (?) al final del nombre de la propiedad. Úselo para las propiedades que no son obligatorias. Esto impide que el sistema de tipos genere un error si se omite la propiedad.

`Solo lectura` - Agregue la palabra clave readonly delante del nombre de la propiedad. Úselo para las propiedades que solo deben modificarse cuando se crea un objeto por primera vez.	readonly firstName: string;

### Declaración de una interfaz con miembros

- Abra el sitio de prueba y quite cualquier código existente.

- Declare una interfaz denominada IceCream que incluya dos propiedades: flavor como string y scoops como number..

```ts
interface IceCream {
   flavor: string;
   scoops: number;
}
```
Ahora puede implementar la nueva interfaz. Comencemos usando la interfaz IceCream como un tipo en una declaración de variable. Declare una nueva variable denominada myIceCream de tipo IceCream y, luego, asigne valores a las propiedades obligatorias. Tenga en cuenta que, cuando empiece a escribir los nombres de propiedades, IntelliSense sugerirá los nombres y tipos correctos. Visualice el valor en la consola para comprobar el trabajo.

```ts
let myIceCream: IceCream = {
   flavor: 'vanilla',
   scoops: 2
}

console.log(myIceCream.flavor);
```

Seleccione Run (Ejecutar). Observe que aparece "flavor" en la ventana Registro.

Ahora vamos a crear una función en la parte inferior denominada tooManyScoops, que usa la interfaz IceCream como tipo de parámetro. Esta función comprueba el número de "scoops" en el objeto IceCream y devuelve un mensaje según el resultado. Para probar el trabajo, pase el objeto {flavor: 'vanilla', scoops: 5} como parámetro y devuélvalo a la consola para comprobar el resultado.

```ts
function tooManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
```

Haga clic en Ejecutar para ejecutar el código. La salida debe ser similar a esta:

"vanilla"
"5 is too many scoops!"

Abra el panel de JavaScript y observe las diferencias entre el código JavaScript y el código TypeScript. La interfaz no tiene ninguna representación en el código JavaScript.

¿Qué ocurre si agrega otra propiedad a la interfaz IceCream? Vamos a agregar una nueva propiedad denominada `instructions` y a asignarle el tipo string.

Revise los errores que aparezcan en el código. Para resolverlos, debe agregar la propiedad `instructions` a los detalles de implementación de la declaración de variable y agregarla como un parámetro pasado a la función. Por ahora, haga que la propiedad `instructions` sea opcional. Para ello, agregue un signo de interrogación al nombre de la propiedad. Todos los errores deberían resolverse, dado que la interfaz ya no necesita la propiedad `instructions`.

Por ahora todo está claro. Pero una copa de helado sin acompañamientos no es más que un helado. Ahora veremos cómo ampliar una interfaz.