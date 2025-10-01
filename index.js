// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here
  // print all sqaure numbers from 1-n
  for (let i = 1; i <= n; i++) {
    let sqr = i * i;
    console.log(sqr);
  }
}
printSquareNumbers(2);
//printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
