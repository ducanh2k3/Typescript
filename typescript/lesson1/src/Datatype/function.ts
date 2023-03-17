// 1. Function return
function demoFunc(): void {
    // console.log("");
    return;
}

// never
function neverFunc(): never {
    const error = new Error("Có lỗi xảy ra")
    throw error
}

const result = demoFunc()
// console.log(result);


// 2. Function parammeter
const showInfo = (firstName: string, lastName:string, midName?: string): string => {
    return "Tên sinh vien: " + firstName + " " + midName + " " +lastName
}

// console.log(sum(10, 20));


// Hoisting
function sum(a: number, b?: number): number {
    if(b){
    return a + b}
    else{
        return a
    }
}

// 3. Optional ?

// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));

// 4. Function declaration
const func2 = function() {

}

const func3 = () => {

}

// 5. Callback
// function we17317_map(arr: any[], callback: () => void) {

// }

let numberArray = [1,2,3]
const newArr = numberArray.map((item) => {
    return item * 2
})

console.log(newArr);




// function map(array: any[], callback: (element: any) => any){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i]));
//     }
//     return result;
// }

// let numbers = [1, 2, 3];
// let doubledNumbers = map(numbers, (x) => x * 2);
// console.log(doubledNumbers); // [2, 4, 6]
// // 6. rest parameters

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName); // Joseph Samuel Lucas MacKinzie