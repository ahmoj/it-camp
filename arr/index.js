const arr = [[1,2,3], [4,5,6], [7,8,9]]
const newArr = []
let j = 0

for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i][j])
    j++
}

console.log(newArr)