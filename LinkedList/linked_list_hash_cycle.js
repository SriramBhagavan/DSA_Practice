var hasCycle = function(head) {
    let seenNodes=new Set()
    let cur=head
    while(cur!=null){
        if(seenNodes.has(cur)){
            return true
        }
        seenNodes.add(cur)
        cur=cur.next
    }
    return false
    
};