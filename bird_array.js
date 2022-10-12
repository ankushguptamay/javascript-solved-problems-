/*In given array of bird where every element represents a bird type id,
determine the ids of the most frequently and least frequently sighted type.*/
const array = [1, 1, 5, 3, 3, 1, 1, 3, 3, 3, 4, 4, 4, 2];

const printOutput = function(array) {
  const countKeyObject = array.reduce((obj, ele) => {
    if(obj[ele]){
      obj[ele]++;
    }
    else{
      obj[ele] = 1;
    }
    return obj;
  }, {});

  var keys = Object.keys(countKeyObject);
  keys.sort(function(a, b) { return countKeyObject[a] - countKeyObject[b] });

  var output = [];
  output.push(keys[0], keys[keys.length-1]);
  // output[keys[0]] = countKeyObject[keys[0]];
  // output[keys.pop()] = countKeyObject[keys.pop()];

  return output;
}

console.log(printOutput(array));
