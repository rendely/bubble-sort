function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted){
    isSorted = true;
    console.log(arr);
    for (let i=0; i < arr.length-1; i++){      
      const curr = arr[i];
      const next = arr[i+1];
      if (curr > next){
        isSorted = false;
        arr[i] = next;
        arr[i+1] = curr;
      }
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
