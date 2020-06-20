var sign = prompt('¿Cual es tu signo zodiacal?')
alert(sign)

switch(sign){

    case 'acuario':
        alert('You are aquarium')
    break

    case 'tauro':
        alert(`You have been put the horns`)
    break

    case 'geminis':
    case 'géminis':
        alert(`You're geminis`)
    break

    case null:
    for(var i = 0; i<10;i++){
        console.warn(`You're a disgrace`)
    }
    
    default:
        console.error(`We haven't found your sign`)
    break
}

