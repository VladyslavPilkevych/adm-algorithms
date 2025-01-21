class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = [];
    }

    addEdge(src, dest, weight) {
        this.edges.push({ src, dest, weight });
    }

    boruvkaAlgoritm() {
        let parent = [];
        let cheapest = [];

        for (let i = 0; i < this.vertices; i++) {
            parent[i] = -1;
            cheapest[i] = -1;
        }

        let numTrees = this.vertices;
        let mstWeight = 0;

        while (numTrees > 1) {
            for (let i = 0; i < this.edges.length; i++) {
                let src = this.edges[i].src;
                let dest = this.edges[i].dest;
                let weight = this.edges[i].weight;

                let set1 = this.find(parent, src);
                let set2 = this.find(parent, dest);

                if (set1 !== set2) {
                    if (cheapest[set1] === -1 || cheapest[set1].weight > weight) {
                        cheapest[set1] = { dest, weight };
                    }
                    if (cheapest[set2] === -1 || cheapest[set2].weight > weight) {
                        cheapest[set2] = { dest, weight };
                    }
                }
            }

            for (let i = 0; i < this.vertices; i++) {
                if (cheapest[i] !== -1) {
                    let set1 = this.find(parent, i);
                    let set2 = this.find(parent, cheapest[i].dest);

                    if (set1 !== set2) {
                        mstWeight += cheapest[i].weight;
                        this.union(parent, set1, set2);
                        console.log(`Edge added: ${i} - ${cheapest[i].dest} Weight: ${cheapest[i].weight}`);
                        numTrees--;
                    }
                    cheapest[i] = -1;
                }
            }
        }

        console.log(`Weight of Minimum Spanning Tree: ${mstWeight}`);
    }

    find(parent, i) {
        while (parent[i] !== -1) {
            i = parent[i];
        }
        return i;
    }

    union(parent, x, y) {
        let xSet = this.find(parent, x);
        let ySet = this.find(parent, y);
        parent[xSet] = ySet;
    }
}

// const graph = new Graph(4);

// graph.addEdge(0, 1, 10);
// graph.addEdge(0, 2, 6);
// graph.addEdge(0, 3, 5);
// graph.addEdge(1, 3, 15);
// graph.addEdge(2, 3, 4);

// graph.boruvkaAlgoritm();
