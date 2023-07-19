
/*if n = 4 print the below

11
1122
112233
11223344 */

let n = prompt("Enter a No:")


for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let j = 1; j <= i * 2; j++) {
      if (j % 2 === 0) {
        pattern += j;
      } else {
        pattern += '1';
      }
    }
    console.log(pattern);
}