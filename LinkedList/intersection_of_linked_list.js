var getIntersectionNode = function(headA, headB) {
    //create set and store headB in it
    let store=new Set()
    while(headB){
        store.add(headB)
        headB=headB.next
    }
    //search each element of headA in set

    while(headA){
        if(store.has(headA)){
        return headA
        
    }
    headA=headA.next
    }
    return null
    
    
};