let arr=[10,30,1,2,40,22,0]

function bubblesort(arr) {
    let n = arr.length
    let isSwap=false

    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j <n  - 1 - i; j++){

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwap=true
            }
        }
        if (!isSwap) {
            false
        }
    }
    return arr
}

console.log(bubblesort(arr))