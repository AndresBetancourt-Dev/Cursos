class Doggy {
  /***
   * Members in Constructor and readonly
   */
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy("LG", 13);
//lg.name = '' is readonly

/**
 * Singleton in Typescript using private constructor
 */
class DogList {
  /**
   * Item
   */
  private doggies: Doggy[] = [];
  /*
  Instance of the class */
  static instance: DogList = new DogList();

  /**
   * This creates the singleton pattern because does not allow to create more class Instances
   */
  private constructor() {}

  /**
   *
   * @param dog Public method to add a dog to the doglist
   */
  public addDog(dog: Doggy) {
    this.doggies.push(dog);
  }

  /**
   *
   * @param dog Static method to add a dog via the class instance
   */
  static addDogStatic(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies; /**
    Get full collection of the data within the class public by default */
  }
}

//Add via public method using the instance
DogList.instance.addDog(new Doggy("Andres", 20));
//Add via static method
DogList.addDogStatic(new Doggy("Mateo", 20));
//Get from the instance
console.log(DogList.instance.getDogs());
