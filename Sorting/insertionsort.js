let arr=[10,30,1,2,40,22,0]

function insertionsort(arr) {
    let n = arr.length


    for (let i = 1; i < n ; i++) {
        let cur = arr[i]
        let prev = i - 1

        while (arr[prev] > cur&& prev >= 0) {
            arr[prev+1] = arr[prev]
            prev--

        }
        arr[prev + 1]=cur
    }
    return arr
}



console.log(insertionsort(arr))

