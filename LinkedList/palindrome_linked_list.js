var isPalindrome = function(head) {
    let cur=head
    let arr=[]
    while(cur){
        arr.push(cur.val)
        cur=cur.next

    }
    let left=0
    let right=arr.length-1
    while(left<right){
         if(arr[left]!==arr[right]){
        return false
    }
     left++
    right--

    }
    return true
    
};