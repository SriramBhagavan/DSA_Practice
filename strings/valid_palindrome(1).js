var isPalindrome = function(s) {
    s=s.toLowerCase()
    let filtered=''
    //let rev=''

    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filtered=filtered+s[i]
            //rev=s[i]+rev
        }
    }
    let rev=filtered.split('').reverse().join('')
    return rev===filtered
    
};