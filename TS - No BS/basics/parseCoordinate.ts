/**
 * Function Overloading
 * Depending on the parameter i will do a different action
 */

interface Coordinate {
    x : number,
    y : number,
};

export function parseCoordinateFromObject(obj : Coordinate) : Coordinate{
    return {
        ...obj,
    };
}

export function parseCoordinateFromNumbers(x : number, y: number) : Coordinate{
    return {
        x,
        y,
    };
}

export const coordinateRegex : RegExp = /(x|y):(\d{1,10}),(y|x):(\d{1,10})/;

//Function Overloading
//unknown type in typescript, basically any but with a cast
function parseCoordinate(str : string) : Coordinate;
function parseCoordinate(obj : Coordinate) : Coordinate; //Overload Signature One
function parseCoordinate(x : number, y: number) : Coordinate; //Overload Signature Two
/** If i specify both paramethers first Overload Signature will cause an issue */
/** ? Operator in paramether indicates that the argument is optional so the overload signature it's compatible */
function parseCoordinate(arg1 : unknown, arg2? : unknown) : Coordinate { //Implementation Signature
    let coordinate : Coordinate = {
        x : 0,
        y : 0
    };

    //As is the way to cast into the specified type i want
    //Since paramether if of type unknow i need to cast it to the expected interface definition in Coordinate
    if(typeof arg1 === "string"){

        if(!coordinateRegex.test(arg1 as string)){
            return coordinate;
        }

        (arg1 as string).split(",").forEach(str => {
           let [key,value] = str.split(":");
           coordinate[key as 'x' | 'y'] = parseInt(value,10);
        });

    }else if(typeof arg1 === "object"){
        coordinate = {
            ...(arg1 as Coordinate)
        }
    }else{
        coordinate = {
            x : arg1 as number,
            y : arg2 as number
        }
    }

    return coordinate;
};

console.log(parseCoordinate(10,20));
console.log(parseCoordinate({x:52,y:35}));
console.log(parseCoordinate("x:10,y:20"));
console.log(parseCoordinate("x:1787450,y:20544884"));
//Do not match the regex pattern
console.log(parseCoordinate("no match"));
console.log(parseCoordinate("b:10,s:474854"));