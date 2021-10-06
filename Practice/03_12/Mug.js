// Class for mug

import Drink from "./Drink.js";

class Mug {
  constructor( // Passing values into constructor
    // Declare variables
    name,
    volume,
    handle,
    colour,
    full
  ) {
    /* This is the constructor method so when you declare a new obeject, 
    the values you pass in ^^ are applied to the class */
    this.name = name;
    this.volume = volume;
    this.handle = handle;
    this.colour = colour;
    this.full = full;
  }

  // Function for setting drink properties
  setDrinkProperties() {
    // Get user input and return
    const drinkType = prompt("Enter drink type (string)");
    const drinkVolume = prompt("Enter drink volume (int)");
    const drinkSugar = prompt("Sugar? (bool)");
    const drinkMilk = prompt("Milk? (bool)");
    const drinkTemp = prompt("Enter drink temperature (int)");

    return [drinkType, drinkVolume, drinkSugar, drinkMilk, drinkTemp];
  }

  fill() {
    if (this.full == true) {
      console.log(this.name, "already full");
    } else {
      let properties = this.setDrinkProperties(); // Get drink properties from function

      // Declare instance of Drink object and set the properties
      const newDrink = new Drink(
        properties[0],
        properties[1],
        properties[2],
        properties[3],
        properties[4]
      );

      // If statement to print out properties
      if (newDrink.volume > this.volume) {
        console.log("Too much liquid!");
      } else {
        this.full = true;
        console.log(this.name, "filled = ", this.full, " with:");
        console.log(
          "Drink =",
          newDrink.type,
          ": temperature =",
          newDrink.temperature,
          "milk =",
          newDrink.milk,
          "sugar =",
          newDrink.sugar
        );
      }
    }
  }
}

export default Mug;
