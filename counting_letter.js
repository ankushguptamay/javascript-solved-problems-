//sort string as first number(how much time letter repeat) second that letter

const str = 'ankushgupta';

const sort_array = str.split("").sort();

function counting(input){

  var temp = input[0];
  var count = 0;
  var arr = '';

  for (let i =0; i<input.length; i++){
    if(input[i] == temp){
      count++;
    }
    else {
      arr += count + temp;
      count = 1;
      temp = input[i];
    }
   }
  arr += count + temp;

  return arr;
}


console.log(counting(sort_array));