// 1. Function return
function demoFunc() {
    // console.log("");
    return;
}
// never
function neverFunc() {
    var error = new Error("Có lỗi xảy ra");
    throw error;
}
var result = demoFunc();
// console.log(result);
// 2. Function parammeter
var showInfo = function (firstName, lastName, midName) {
    return "Tên sinh vien: " + firstName + " " + midName + " " + lastName;
};
// console.log(sum(10, 20));
// Hoisting
function sum(a, b) {
    return a + b;
}
// 3. Optional ?
// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));
// 4. Function declaration
var func2 = function () {
};
var func3 = function () {
};
// 5. Callback
// function we17317_map(arr: any[], callback: () => void) {
// }
var numberArray = [1, 2, 3];
var newArr = numberArray.map(function (item) {
    return item * 2;
});
console.log(newArr);
function map(array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}
var numbers = [1, 2, 3];
var doubledNumbers = map(numbers, function (x) { return x * 2; });
console.log(doubledNumbers); // [2, 4, 6]
// 6. rest parameters
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName); // Joseph Samuel Lucas MacKinzie
