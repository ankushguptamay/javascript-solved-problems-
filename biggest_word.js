const string = 'my name is Ankush Gupta';

function longest(str){
  strr = str.split(" ");
  // return strr.sort((a,b) => b.length - a.length)[0];
  return strr.sort(function(a, b) {
    return b.length - a.length;
  })[0];
}

console.log(longest(string));





function biggest(str){
  strr = str.split(" ");
  let long = 0;
  let longest_word;
  for(let i = 0; i<strr.length; i++){
    if(long < strr[i].length){
      long = strr[i].length;
      longest_word = strr[i];
    }
  }
  return longest_word;
}
console.log(biggest(string));
