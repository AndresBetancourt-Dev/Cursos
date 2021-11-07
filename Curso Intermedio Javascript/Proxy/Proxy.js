/* Base Object Literal */
const Person = {
  name: "",
  surname: "",
  age: 0,
};

//Optional Properties
const optionalProperties = ["height", "email", "hairColor"];

//Regular Expressions
const regex = {
  name: /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

//Proxy Handler
const proxyHandler = {
  validations(property, value) {
    try {
      switch (property) {
        case "name":
        case "surname":
          if (regex["name"].test(value.trim())) {
            console.log(`Property "${property}" is correct`);
          } else {
            throw new Error(
              `Property "${property}" is incorrect. Doesn't match RegEx Pattern`
            );
          }
          break;
        case "email":
          if (regex["email"].test(value.trim())) {
            console.log(`Property "${property}" is correct`);
          } else {
            throw new Error(
              `Property "${property}" is incorrect. Doesn't match RegEx Pattern`
            );
          }
          break;
        case "age":
          if (typeof value === "number" && value >= 0) {
            console.log(`Property "${property}" is correct`);
          } else {
            throw new Error(
              `Property "${property}" is incorrect. Type of is not a number or value is negative`
            );
          }
          break;
        default:
          return true;
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
    return true;
  },
  set(object, property, value) {
    if (
      Object.keys(object).indexOf(property) !== -1 ||
      optionalProperties.indexOf(property) !== -1
    ) {
      if (this.validations(property, value)) {
        object[property] = value;
      }
    } else {
      console.error(
        `Property "${property}" is incorrect. Property is not defined in optional properties`
      );
    }
  },
};

//Proxy Instance
const PersonProxy = new Proxy(Person, proxyHandler);

/* Success */
PersonProxy.name = "Andrés";
PersonProxy.surname = "Betancourt";
PersonProxy.age = 15;
PersonProxy.email = "andres@gmail.com";

/* Errors */
PersonProxy.name = "Andr$s"; //Doesn't match RegEx Pattern
PersonProxy.email = "Something Wrong"; //Doesn't match RegEx Pattern
PersonProxy.anyProperty = "This will throw error!"; //Property not defined in optional Properties
PersonProxy.age = "15"; //Type of is not a number
PersonProxy.age = -7; //Value is negative
PersonProxy.age = -21;

/* Both Objects share the same state */
console.log(Person);
console.log(PersonProxy);
