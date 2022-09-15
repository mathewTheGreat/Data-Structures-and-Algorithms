class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        var newNode = new Node(val)
        if(!this.first) {
            this.first = newNode    
            this.last = newNode
        }else {
            this.last.next =  newNode
            this.last = newNode
        }

        return ++this.size
    }

    dequeue() {
        var temp = this.first
        if(!this.first) return null

        if(this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp
    }
}

var e = new Queue()

e.enqueue(1)
e.enqueue(2)
e.enqueue(3)
console.log(e)
console.log(e.dequeue())
console.log(e)