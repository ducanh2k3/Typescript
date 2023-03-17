function sortArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (typeof arr[i] === "string" && typeof arr[j] === "string" || typeof arr[j] === "number" && typeof arr[j] === "number") {
                if (arr[i] > arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            else {
                console.log("number or string ");
                break;
            }
        }
        // console.log(arr)
    }
    return arr;
}
var myArray1 = ["foo", 3, "bar", 1, "baz", 2];
var array2 = ["a", "c", "b"];
var array1 = [2, 4, 7, 3, 6];
var sortedArray = sortArray(myArray1);
