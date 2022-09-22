class Node {
    constructor(val, left = null, right = null) {
        this.value = val
        this.left = left
        this.right = right
    }

    dfsRecursivePreOrder = (node, arr = []) => {
        node = this
        if(node) {
            arr.push(node.val)
            if(node.left) this.dfsRecursivePreOrder(node.left, arr)
            if(node.right) this.dfsRecursivePreOrder(node.right, arr)
        }

        return arr
    }

    
}

const dfsRecursiveInOrder = (n, arr = []) => {
    if(n){
        if(n.left) dfsRecursiveInOrder(n.left, arr);
        arr.push(n.val);
        if(n.right) dfsRecursiveInOrder(n.right, arr);
    }
    return arr;
}

const node = new Node(27);
node.left = new Node(14);
node.left.left = new Node(10);
node.left.right = new Node(19);
node.right = new Node(35);
node.right.left = new Node(31);
node.right.right = new Node(42);
console.log(dfsRecursiveInOrder(node, [1, 2, 3, 4, 5]))