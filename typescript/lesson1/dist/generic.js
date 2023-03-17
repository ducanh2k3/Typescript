function we17317_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
}
var numArray2 = ["tring", 2, 3];
var result2 = we17317_map(numArray2, function (item, i) {
    return item + "-we17317" + " " + i;
});
console.log(result2);
