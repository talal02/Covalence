var favMovie = (movie = "The Room", name = "Tommy Wiseau") => {
  console.log(`my name is ${name} and my favorite movie is ${movie}`);
}

var getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

var getFirstNameConcise = fullName => fullName.split(' ')[0];

var doMath = (x, y) => ({
  exponent: Math.pow(x, y),
  product: x*y
});

favMovie();
favMovie('Harry Potter');
favMovie('Harry Potter', 'Talal');


console.log(getFirstName('Talal Ahmed'));
console.log(getFirstNameConcise('Talal Ahmed'))

var result = doMath(2, 4);
console.log(result.exponent);
console.log(result.product);
