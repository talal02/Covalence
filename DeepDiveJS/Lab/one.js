
for(var i = 1; i <= 100; i++) {
  var heading = document.createElement('h3');
  heading.style.textAlign = 'center';
  heading.innerText = 'Heading ' + i;
  heading.addEventListener('click', specialize());
  document.getElementsByTagName('body')[0].appendChild(heading);
}

function specialize() {
  var friends = ['A', 'B', 'C', 'D', 'E'];
  var locations = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  var weapons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return function() {
    var text = this.textContent.split(' ');
    console.log(text);
    text = parseInt(text[1]);
    alert(`Accusation ${text}: I accuse ${friends[text%5]}, with the ${weapons[text%20]} in the ${locations[text%10]}!`);
  }
}

