var counter = 0
const raining = () => {
var state = (Math.random().toFixed(2))
console.warn(`${state}`)
return (parseFloat(state)<.25)
}
do{
    counter++
}while(!raining())

const singularOrPlural = (counter) =>{
    var validation = (counter<=1)
    var message = console.log(`It's ${validation}`)

    return validation;
} 

if(singularOrPlural(counter)){
    //Singular
    console.error(`Fuiste a la tienda y solo llovio un día`)
}else{
    //Plural
    console.error(`Fuiste a la tienda y no llovio durante ${counter} dias`)
}
