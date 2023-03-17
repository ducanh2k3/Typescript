function sortArray<T extends string | number>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (typeof arr[i] === "string" && typeof arr[j] === "string" || typeof arr[j] === "number"&& typeof arr[j] === "number") {
        if (arr[i] > arr[j]) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      } else{
        console.log("number or string ");
        break;
      }
    }
    // console.log(arr)
  }
  return arr;
}

const myArray1 = ["foo", 3, "bar", 1, "baz", 2];
const array2=["a","c","b"]
const array1 =[2,4,7,3,6]

const sortedArray = sortArray(myArray1);


