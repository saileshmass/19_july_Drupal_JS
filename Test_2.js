/*In a set of elements identify and print duplicate elements that repeats more than 3 times*/


const arr = [1, 2, 3, 2, 2, 4, 5, 5, 5, 5, 6, 6, 6];
findDuplicates(arr);

function findDuplicates(array) {
  const frequencyCounter = {};


  array.forEach((element) => {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  });

  // Print elements that repeat more than three times
  for (const element in frequencyCounter) {
    if (frequencyCounter[element] > 3) {
      console.log(`${element}`);
    }
  }
}