var arr = ["a", "b", "c", "d", "e", "f", "g"];
var myArray = [[1, 2], [3, 4]];
console.log(myArray[0][0]); // Output: 1
console.log(myArray[1][1]); // Output: 4
// tuple
var myTuple;
myTuple = ["hello", 10];
console.log(myTuple[0]); // Output: "hello"
console.log(myTuple[1]); // Output: 10
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // Output: 1
