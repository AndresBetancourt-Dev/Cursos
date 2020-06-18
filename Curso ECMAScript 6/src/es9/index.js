/*-----------------------------------------------------------*/
/*
Repose operator
*/

const object = {
    name : 'Andres',
    age : 20,
    country : 'CO'
};

let {name, ...all} = object;
console.log(all)

//The purpose of this operator it's for inheritance
{
    const object = {
        name : 'Andres',
        age : 20,
        country : 'CO'
    };

    const objectTwo = {
        ...object,
        country : 'MX'
    }


    console.log(objectTwo)

}

/*Finally in promises, to do something at the end of each promise
Without having in account if it catched and error or not.
*/

{
    const helloWorld = () => {
        return new Promise((resolve,reject) =>{
            (!true)? resolve('Hello world'): reject(new Error('Test Error'))
        })
    }

    helloWorld()
    .then((response)=>console.log(response))
    .catch((error)=>console.log('La promese generó un error'))
    .finally(()=>console.log(`Promise ended`))
}


/*
RegExpression
*/