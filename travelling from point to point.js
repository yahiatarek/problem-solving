const n = 3, m = 2; // Number of points and roads
const edges = [
  [1, 2],
  [2, 3]
];
const A = 1, B = 3;

function canTravelToPoint(points, roads, edges, A, B) {
  const adjList = Array.from({ length: points + 1 }, () => []);

  // Create adjacency list [ [], [ 2 ], [ 1, 3 ], [ 2 ] ]
  for (let [p1, p2] of edges) {
    adjList[p1].push(p2)
    adjList[p2].push(p1)
  }
  
  // BFS to find if there's a path from A to B
  // Initialize queue with starting point A
  const queue = [A]
  // Initialize visited array to keep track of visited points
  const visited = Array.from({ length: points + 1 }).fill(false)
  
  // While queue is not empty, pop the first element
  while (queue.length !== 0) {
    const current = queue.shift()
  // If the popped element is B, return 1 (path exists)
    if (current === B) return 1
    
  // For each adjacent node of the popped element, if not visited, mark it as visited and push it to the queue
    adjList[current].forEach(node => {
      // If the node is not visited, mark it as visited and push it to the queue
      // This prevents cycles and ensures we don't revisit nodes
      if (!visited[node]) {
        visited[node] = true
        queue.push(node)
      }
    });
  }
  // If we finish the loop without finding B, return 0 (no path exists)
  return 0

}

console.log(canTravelToPoint(n, m, edges, A, B)); // Output: 1
