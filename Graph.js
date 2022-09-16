class Graph {
    constructor() {
        this.adjancecyList = []
    }

    addNode(node) {
        if(!this.adjancecyList[node]) this.adjancecyList[node] = []
    }

    addConnection(node1, node2) {
        this.adjancecyList[node1].push(node2)
        this.adjancecyList[node2].push(node1)
    }

    removeConnection(node1, node2) {

    }

    removeNode(node) {
        while(this.adjancecyList[node].length) {
            var adjancentNode = this.adjancecyList[node].pop()
            this.removeConnection(node, adjancentNode)

        }
        delete this.adjancecyList[node]
    }
}

const Argentina = new Graph()
Argentina.addNode("Buenos Aires")
Argentina.addNode("Santa fe")
Argentina.addNode("Córdoba")
Argentina.addNode("Mendoza")
Argentina.addConnection("Buenos Aires", "Córdoba")
Argentina.addConnection("Buenos Aires", "Mendoza")
Argentina.addConnection("Santa fe", "Córdoba")

console.log(Argentina)