function Print(n) {
    if (n == 0) {
        return
    }
    else {
        console.log(n);
        n = n - 1
        Print(n)
        
    }
    
}
Print(5)