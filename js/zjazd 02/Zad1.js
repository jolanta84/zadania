let numbersArrays = [1, 5, 9];

function sumOfCubes(arr) {
   let sum = 0;
   
   for (let item of arr) {
      sum += Math.pow(item, 3)
   }
   
   return sum;
}

console.log(sumOfCubes(numbersArrays));