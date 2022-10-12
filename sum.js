// const arr = [1,2,3,4,5];

// function arrSum(x){
//   let sum = 0;
//   for(let i = 0; i<x.length; i++){
//   sum = sum + x[i];
//   }
//   return sum ;
// };

// console.log(arrSum(arr));

// const sum = arr.reduce(function(arr, curr){
//   return arr + curr;
// }, 0);

// console.log(sum);


const addition = function(arr) {
  const sum = arr.reduce(function(ele, curr) {
    return ele + curr;
  }, 0);

  console.log(sum);
}

const arr = [1,2,3,4,5];
addition(arr);
