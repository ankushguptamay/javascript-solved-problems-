// sorting an array in which biggest number, smallest number,
// second biggest second smallest......

function sortingArray(a) {
  let start = 0;
  let end = sort.length - 1;
  let sorted = [];

  while(start < end){
    sorted.push(a[end--], a[start++]);
  };
  if(start == end) sorted.push(a[end]);

  return sorted;
};


const arr = [101, 34, 45, 203, 59, 304, 99, 12, 38];
const sort = [];
for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    if(arr[j]<arr[i]){
      arr[j] = arr[j] + arr[i];
      arr[i] = arr[j] - arr[i];
      arr[j] = arr[j] - arr[i];
    }
  }
  sort.push(arr[i]);
}

//const sort = arr.sort(function(a,b){
//  return a-b;
//});

console.log(sortingArray(sort));