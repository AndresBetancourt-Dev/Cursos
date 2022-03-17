/**
 * Abstract class cannot be instanciated
 * abstract method cannot be declared, works as signature
 */

abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {
    console.log(`${this.name} attacks with ${this.getSpecialAttack()}`);
  }
  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

/**
 * Class that extends from abstract class must implements abstract methods
 */
class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu";
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightning Kick";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack());
ryu.fight();

const chunLi = new ChunLi();
console.log(chunLi.getSpecialAttack());
chunLi.fight();
