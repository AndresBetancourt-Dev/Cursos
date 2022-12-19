function displayAlert(message) {
  //Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage.
  alert("The message is " + message);
}

function sum(input: number[]): number {        
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
return total;
}