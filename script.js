const { MinHeap } = require('heap-js');
function mincost(arr)
{ 
//write your code here
// return the min cost
	 const heap = new MinHeap();
    for (const length of arr) {
        heap.push(length);
    }

    let totalCost = 0;

    // While there is more than one rope in the heap
    while (heap.size() > 1) {
        // Extract the two smallest ropes
        const first = heap.pop();
        const second = heap.pop();

        // Calculate the cost of connecting them
        const cost = first + second;
        totalCost += cost;

        // Insert the resulting rope back into the heap
        heap.push(cost);
    }

    return totalCost;
  
}

module.exports=mincost;
