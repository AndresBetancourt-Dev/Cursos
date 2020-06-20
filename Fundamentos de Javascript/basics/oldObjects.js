function Persona(nombre,edad,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
}

Persona.prototype.altoOno = function()  {
    if(alto(this)){
        console.log(`Soy alto mido ${this.altura}`);
    }else{
        console.warn('No eres alto');
    }
}

const alto = (person) => ((person.altura>=180));

var pepe = new Persona('Pepe','Gonzales',188);

class Pepe {
    
}