# ADM Algorithms

This repository contains implementations of algorithms designed for solving graph problems and geometric calculations. It focuses on educational and practical use cases related to graph theory and mathematical computations. The primary contents include:

- **Borůvka's Algorithm**: For finding the Minimum Spanning Tree (MST) of a connected graph.
- **Length Calculation Function (`dlzka`)**: A unique mathematical function for geometric computations based on given parameters.

---

## Features
1. Implementation of Borůvka's Algorithm in JavaScript.
2. Custom function to compute geometric lengths.
3. Easy-to-understand code suitable for educational use.

---

## Usage
### Graph Implementation (Borůvka's Algorithm)
You can use the `Graph` class to create graphs, add edges, and find the MST:
```javascript
const graph = new Graph(4);

graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 6);
graph.addEdge(0, 3, 5);
graph.addEdge(1, 3, 15);
graph.addEdge(2, 3, 4);

graph.boruvkaAlgoritm();
