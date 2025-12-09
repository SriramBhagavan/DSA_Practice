
var reverse = function(x) {
    let xcopy=x
     x=Math.abs(x)
        let rev=0
        while(x>0){
            let digit=x%10
            rev=(rev*10)+digit
            x=Math.floor(x/10)
        }
        let limit=Math.pow(2,31)
        if(rev<-limit || rev>limit){
            return 0
        }
    if (xcopy<0){
        return -rev
    }
    else{
        return rev
    }
};