let arr=[1,4,5,3,8,2]
function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == n) {
            return i
        }
    }
    return -1
    
}

console.log(linearSearch(arr,2))