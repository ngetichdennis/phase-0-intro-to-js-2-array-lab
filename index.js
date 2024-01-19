// Write your solution here!
// Declare a global variable cats and assign it an initial value of ["Milo", "Otis", "Garfield"]
let cats = ["Milo", "Otis", "Garfield"];

// Define a function that appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Define a function that prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Define a function that removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Define a function that removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Define a function that appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  return [...cats, name];
}

// Define a function that prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// Define a function that removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, -1);
}

// Define a function that removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}
