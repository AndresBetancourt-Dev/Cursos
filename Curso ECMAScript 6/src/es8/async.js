const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (!true)? setTimeout(()=> resolve('Hello world'),3000) :
        reject(new Error('Test Error'))
    })
}
/*
const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()
*/
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    }catch(error) {
        console.log('Hubo un error')
    }
};

anotherFunction()