/*
O(V + E) when Adjacency List is used and O(V^2) for adjacency matrix
*/
class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor(data) {
        let node = new Node(data);
        this._root = node;
    }

    find(data, node = this._root) {
        if(node.data == data) return node;

        for(let child of node.children) {
            if(this.find(data, child)) return child;
        }
        
        return null;
    }

    add(data, parentData) {
        let node = new Node(data);
        let parent = this.find(parentData);

        if(parent) {
            parent.children.push(node);
            node.parent = parent;

            return node;
        }else  {
            throw new Error(`Cannot add node: parent with data ${parentData} not found.`);
        }
    }

    remove(data) {
        let node = this.find(data);

        if(node) {
            let parent = node.parent;
            let indexOfNode = parent.children.indexOf(node);
            parent.children.splice(indexOfNode, 1);
        }

        else  {
            throw new Error(`Cannot remove node: parent with data ${parentData} not found.`);
        }
    }

    forEach(callback, node = this._root) {
        for(let child of node.children) {
            this.forEach(callback, child);
        }

        callback(node);
    }

    

    forEachBreadthFirst(callback) {
        let queue = [];
        queue.push(this._root);

        while(queue.length > 0) {
            let node = queue.shift();
            callback(node);

            for(let child of node.children) {
                queue.push(child);
            }
            
        }
    }

    
}

let tree = new Tree('Mathew');

tree.add("Abiud", "Mathew");
tree.add("Prince", "Mathew");
tree.add("Barbara", "Abiud");
tree.add("Shaddie", "Prince")

console.log("Depth first search");
tree.forEach(node => console.log(node.data));
console.log("Breadth first search");
tree.forEachBreadthFirst(node => console.log(node.data));
