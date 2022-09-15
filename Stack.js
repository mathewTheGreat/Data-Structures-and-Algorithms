/*
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        var newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }else{
            var tmp = this.first
            this.first = newNode
            this.first.next = tmp
        }
        return ++this.size
    }

    pop() {
        if(!this.first) return null
        var val = this.first
        if(this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next
        --this.size
        return val.value
    }
}

var s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
console.log(s);
console.log(s.pop())
console.log(s)