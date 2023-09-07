/*
1 Sort edges by ascending edge weight
2 Walk through the sorted edges and look at the two nodes the edges belongs to
  If the nodes are already unified we don't include this edge, otherwise
   we include it and unify the nodes

3 The algorithm terminates when every edge has been processed
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function (points) {
  // we assemble all possible edges(distances) among points
  let edges = [];
  let n = points.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let point1 = points[i];
      let point2 = points[j];
      let distance =
        Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
      edges.push({ start: i, end: j, distance });
    }
  }
  edges = edges.sort((a, b) => a.distance - b.distance);
  const nodes = new Array(n).fill(0).map(() => ({ rank: 0, visited: 0 }));
  // init the parent
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    node.parent = node;
  }
  let visitedCount = 0;
  let groupCount = 0;
  let cost = 0;
  // find with path compression
  function find(node) {
    let parent = node.parent;
    if (parent === node) {
      return node;
    }
    node.parent = find(parent);
    return node.parent;
  }
  // union by rank
  function union(node1, node2) {
    let parent1 = find(node1);
    let parent2 = find(node2);
    if (parent1 === parent2) {
      return;
    }
    if (parent1.rank > parent2.rank) {
      parent2.parent = parent1;
      return;
    }
    if (parent2.rank > parent1.rank) {
      parent1.parent = parent2;
      return;
    }
    // rank is the same
    parent2.parent = parent1;
    parent1.rank += 1;
    return;
  }

  for (let i = 0; i < edges.length; i++) {
    // early termination
    if (visitedCount === n && groupCount === 1) {
      return cost;
    }
    let edge = edges[i];

    let parent1 = find(nodes[edge.start]);
    let parent2 = find(nodes[edge.end]);
    if (nodes[edge.start].visited) {
      // both visited
      if (nodes[edge.end].visited) {
        // if in different group, group count -1
        if (parent1 !== parent2) {
          groupCount -= 1;
        }
      } else {
        nodes[edge.end].visited = 1;
        visitedCount += 1;
      }
    } else {
      nodes[edge.start].visited;
      visitedCount += 1;
      if (nodes[edge.end].visited) {
      } else {
        // group count +1 only when both are unvisited
        groupCount += 1;
        nodes[edge.end].visited = 1;
        visitedCount += 1;
      }
    }
    if (parent1 !== parent2) {
      union(parent1, parent2);
      cost += edge.distance;
    }
  }
  return cost;
};

console.log(minCostConnectPoints([0, 1, 2]))