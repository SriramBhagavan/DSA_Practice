function isPalindrome(number) {
    if (number<0){
        return false
    }
    let copy=number
    let reversedNumber = 0
    while(number>0){
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    if (reversedNumber === copy) {
        return true
    }
    else {
        return false
    }
}

console.log(isPalindrome(-121))