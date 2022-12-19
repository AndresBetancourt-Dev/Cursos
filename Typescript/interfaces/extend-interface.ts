interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
}

let myIceCream2: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "caramel",
  nuts: true,
};

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));
