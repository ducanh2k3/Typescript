function we17317_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
    let temp = []
    for(let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i)
        // temp.push(newItem)
    }
    return temp
}
const numArray2=["tring",2,3]
const result2 = we17317_map(numArray2, (item, i) => {
    return item + "-we17317" + " " + i
})

console.log(result2);