/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Object
const mug = {
  // Properties
  volume: 20,
  handle: true,
  colour: "White",
  state: "Empty",

  //Nested Object
  coffee: {
    make: "Gold",
    temperature: 0,
    colour: "Black",
    milk: 0,
    sugar: 0,
  },

  // Function
  fill: function () {
    if (this.state == "Empty") {
      this.state = "Full";
      this.coffee.temperature = 100;
      console.log(
        "Mug: ",
        this.state,
        "and Temperature: ",
        this.coffee.temperature
      );
    } else {
      console.log("Mug already full");
    }
  },
};

const notebook = {
  colour: "Black",
  type: "Ring-bind",
  numPages: 100,
  lined: true,
};
