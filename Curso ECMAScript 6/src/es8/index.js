/*-----------------------------------------------------------------------*/
/*
Transform object into matrix with entries
*/

//Simple constant object
const data = {
    frontend: 'Andres',
    backend: 'David',
    design: 'Ana'
}
//Partitions each attribute of the Object into and array with the attribute
//name and the value
const entries = Object.entries(data);
console.log(entries)
console.log(entries.length) //Three arrays with each one with two items

/*-----------------------------------------------------------------------*/
/*
Object values returns the object within and array of the values
*/
{
    const data = {
        frontend: 'Andres',
        backend: 'David',
        design: 'Ana'
    }

    //This returns and array with the values of the object
    const values = Object.values(data);
    console.log(values)
    console.log(values.length)
}

/*-----------------------------------------------------------------------*/
/*
Concat string in the start and in the end with pad Function
*/

{
    const addTitle = (name) => name.padStart(name.length+5,'Ing. ');
    console.log(addTitle('Andres'))
    console.log(addTitle('Maria'))
    console.log(addTitle('Juliana'))
    console.log(addTitle('Laura'))


    const addSufix = (name) => name.padEnd(name.length+27,', El Destructor de Planetas')
    console.log(addSufix('Andres'))
}