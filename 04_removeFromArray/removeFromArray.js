const removeFromArray = function(array, number) {
   let newArray = [];
   for (let items of array) {
      if (items !== number) {
         newArray.push(items);
      }   
   }
   return newArray;
   // return array.splice(number, 1);
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1,2,3,4,5,1,1,1,2,2,1,1], 1));