var lengthOfLastWord = function(s) {
    n=s.length-1
    while(n>=0){
        if(s[n]===' '){
            --n
        }
        else{
            break
        }
    }
    let count=0
    while(n>=0){
        if(s[n]==' '){
            break
        }
        else{
            count++
            --n
        }
    }
    return count

    
};