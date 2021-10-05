/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    console.log("Old name = ", this.name);
    this.name = newName;
    console.log("New name = ", this.name);
  },
  changeVolume: function () {
    this.volume = 45;
    console.log("New volume: ", this.volume);
  },
};

// Get user input
const input = prompt("Input new name:");

// Run methods
backpack.changeName(input);
backpack.changeVolume();
