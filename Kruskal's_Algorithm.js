/*
1 Sort edges by ascending edge weight
2 Walk through the sorted edges and look at the two nodes the edges belongs to
  If the nodes are already unified we don't include this edge, otherwise
   we include it and unify the nodes

3 The algorithm terminates when every edge has been processed
*/

class UnionFind {

  constructor(elements) {

    this.size = elements.length

    this.parent = {}

    elements.forEach(e => (this.parent[e] = e))

  }

  union(a, b) {

    let rootA = this.find(a)
    let rootB = this.find(b)

    if(rootA === rootB) return;

    if(rootA < rootB) {
      if(this.parent[b] != b) this.union(this.parent[b], a)
      this.parent[a] = this.parent[a]
    }else {
      if(this.parent[a] != a) this.union(this.parent[a], b)
      this.parent[b] = this.parent[a]
    }

  }

  find(a) {
  
    while(this.parent[a] !== a) {
      a = this.parent[a]
    }

    return a

  }

  connected(a, b) {
    return this.find(a) === this.find(b)
  }

}