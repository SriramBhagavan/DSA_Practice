var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head
    }

    let length=0
    let cur=head
    while(cur){
        cur=cur.next
        length++
    }
     k=k%length
    let s=head
    let f=head
    for(let i=0;i<k;i++){
        f=f.next
    }

    while(f.next){
        s=s.next
        f=f.next
    }
    f.next=head
    let newNode=s.next
    s.next=null
    return newNode
};