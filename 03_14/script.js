/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

// import Backpack from "./Backpack.js";
import Book from "./Book.js";

// const everydayPack = new Backpack(
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST"
// );

// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);
// console.log("Days since aquired:", everydayPack.backpackAge());

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 300, 150, false);
const theBible = new Book("The Bible", "God?", 10000000, 2, false);
const diaryOfAWimpyKid = new Book(
  "Diary of a Wimpy Kid",
  "Manny",
  10,
  10,
  true
);
// + 2 more but i cba

console.log(harryPotter);
console.log(theBible);
console.log(diaryOfAWimpyKid);
