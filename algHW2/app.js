
 //O(n) prochodim po vsem elementam massiva s pomoshju for

function MaxNumber(array) {
   let max = array[0];
   for (let i = 1; i < array.length; i++) {
     if (array[i] > max) {
       max = array[i];
     }
   }
   return max;
 }
 
 let numbers = [10, 5, 8, 40, 80, 7];
 let maxNumber = MaxNumber(numbers);
 console.log(maxNumber);
