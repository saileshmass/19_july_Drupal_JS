/*Delete duplicate elements from the list of elements in array*/


let arr = ["sailesh", "Ravi", "sailesh",
  "mani", "mary", "mani", "nisha"];

function removeDuplicates(arr) {
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));



