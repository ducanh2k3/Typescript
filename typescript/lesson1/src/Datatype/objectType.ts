const arr : string[] =["a","b","c","d","e","f","g"]

const myArray: number[][] = [[1,2],[3,4]];



console.log(myArray[0][0]); // Output: 1
console.log(myArray[1][1]); // Output: 4

// tuple
let myTuple: [string, number];
myTuple = ["hello", 10];

console.log(myTuple[0]); // Output: "hello"
console.log(myTuple[1]); // Output: 10

// enum
enum Color {
    Red,
    Green,
    Blue
  }
  
  let myColor: Color = Color.Green;
  
  console.log(myColor); // Output: 1