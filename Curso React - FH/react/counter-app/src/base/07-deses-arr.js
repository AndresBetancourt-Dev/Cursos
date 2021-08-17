const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;

export const retornaArreglo = () => {
  return ["ABC", 123];
};

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
export const usState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
