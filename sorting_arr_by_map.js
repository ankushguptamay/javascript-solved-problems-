
const printSequence = function() {
  const arr = [];
  for(let i = 1; i<=100; i++){
    arr.push(i);
  };

  let sequence = arr.map(function(x){
    if(x%3===0 && x%5===0) {
      x ='FizzBuzz';
    }

    else if(x%3===0) {
      x ='Fizz';
    }

    else if(x%5===0) {
      x ='Buzz';
    }

    else {
      x;
    }

    return x;
  });

  console.log(sequence);
  }

printSequence();
