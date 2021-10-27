function addNumbers(numberOne : number,numberTwo : number) : number{
    return numberOne+numberTwo;
}

export default addNumbers;

export const addStrings = (stringOne : string, stringTwo : string = "") : string => `${stringOne} ${stringTwo}`;

//Union type in typescript | not || or
//Any of the types that qualify are ok for enter into these particular parameter
export const format = (title : string, parameter : string | number) : string => `${title} ${parameter}`;

export const printFormat = (title : string, parameter : string | number) : void => console.log(format(title,parameter));

//export const fetchData = (url : string) : Promise<string> =>  Promise.resolve(`Data from ${url}`);

export const introduce = (salutation: string, ...names:string[]) :string => {
    return `${salutation} ${names.join(" ")}`;
};

//Typescript only enforces types at compile time
//Not at runtime

interface Person{
    first : string,
    last : string
}

export function getName(user : Person) : string{
    return `${user?.first ?? "First"} ${user?.last ?? "Last"}`;
}