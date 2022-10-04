/*
1 Sort edges by ascending edge weight
2 Walk through the sorted edges and look at the two nodes the edges belongs to
  If the nodes are already unified we don't include this edge, otherwise
   we include it and unify the nodes

3 The algorithm terminates when every edge has been processed
*/