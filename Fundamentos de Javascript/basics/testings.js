

function main(){
    var list;
    createTheList(list);
    do{
    showMenuOptions();
    var option = prompt('Por favor digite su opción');
    switch(option){
        case "1": 
        list = insertIntoList(list);
        console.log(list[0]);
        break;
        case "2":
        showList(list);
        break;
        case "3":
        console.log(`Has salido correctamente del sistema`);
        break;
        default: alert('Opción incorrecta');
    }
    }while(option != 3);
}


const createTheList = (list) => ((list = []))

const showMenuOptions = () => {
    console.log("\tMenú");
    console.log("1. Ingresar a una persona en la lista");
    console.log("2. Mostrar la lista");
    console.log("3. Salir");
}


const insertIntoList = (lista) =>{
    var persona = {
        name : "",
        age: 0
    }
    var good = initializeGood(good);
    while(isNotGood(good)){
        console.log("Por favor digite el nombre de la persona")
        persona.name = prompt("El nombre de la persona");
        if(nameIsNull(persona.name)){
            alert("El nombre de la persona ingresado es Nulo por favor digitelo de nuevo"); continue;
        }
        if(nameIsNotAString(persona.name)){
            alert("El nombre de la persona ingresado no es una cadena de texto digitelo de nuevo"); continue;
        }
        if(nameToShort(persona.name)){
         alert("El nombre de la persona ingresado muy corto por favor digitelo de nuevo"); continue;
        }
        if(nameDoesNotMakeSense(persona.name)){
            alert("El nombre de la persona ingresado no tiene sentido por favor digitelo de nuevo"); continue;
        }
       good++;
    }
    good = initializeGood(good);
    while(isNotGood(good)){
        console.log("Por favor digite la edad de la persona");
        persona.age = prompt("Edad de la persona");
       if(ageIsNull(persona.age)){
        alert("La edad ingresada es nula por favor digitelo de nuevo"); continue;
       }
       persona.age = parseInt(persona.age);
       if(ageIsNotANumber(persona.age)){
        alert("La edad ingresada no es un número por favor digitelo de nuevo"); continue;
       }
       if(ageIsNegative(persona.age)){
        alert("La edad ingresada es negativa o cero por favor digitelo de nuevo"); continue;
       }
       if(ageIsTooLong(persona.age)){
        alert("La edad ingresada es muy extensa quien eres matusalen por favor digitelo de nuevo"); continue;
       }
       good++;
    }
    return lista;
}

function showList(list){
    for(let i = 0; i < list.length; i++){
        for(let property in list){
            if(property=='name'){
                console.log(`El nombre de la persona # ${i} es ${list[property]}`);
            }else{
                console.log(`La edad de la persona es # ${i} es ${list[property]}`);
            }
        }
    }
}

const initializeGood = (good) => (good=0)
const isNotGood = (good) => ((good!=1));
const nameIsNull = (name) => ((name===null));
const nameToShort = (name) => ((name.length<=1));
const nameIsNotAString = (name) => ((typeof(name)!='string'));
const nameDoesNotMakeSense = (name) => {
    for(let i = 0; i<name.length;i++){
        if(name.charAt(i)==''){
            continue;
        }
        if(isNaN(name.charAt(i)))
        {
            continue;
        }else
        {   
           
            return true;
        }
    }
    return false;
}
const ageIsNull = (age) => ((age===null));
const ageIsNegative = (age) => ((age<1));
const ageIsTooLong = (age) => ((age>150));
const ageIsNotANumber = (age) => ((typeof(age)!='number'));