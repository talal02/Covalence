let generateBtn = document.getElementById('generate-die');
let dices_container = document.getElementById('dices');
let rerollBtn = document.getElementById('reroll-die');
let sumBtn = document.getElementById('sum-die');
let generatedDies = [];

generateBtn.addEventListener('click', function() {
  if(generatedDies.length < 4) {
    let die = new Die();
    generatedDies.push(die);
  }
});

rerollBtn.addEventListener('click', function() {
  for(var i = 0; i < generatedDies.length; i++) {
    generatedDies[i].roll();
  }
})

sumBtn.addEventListener('click', function() {
  var sum = 0;
  for(var i = 0; i < generatedDies.length; i++) {
    sum += generatedDies[i].value;
  }
  alert(sum);
})

class Die {
  constructor() {
    this.div = document.createElement('div');
    this.div.classList.add('die');
    this.div.addEventListener('dblclick', () => {
      for(var i = 0; i < generatedDies.length; i++) {
        if(generatedDies[i] == this) {
          for(var j = 0; j < dices_container.children.length; j++) {
            if(dices_container.childNodes[j] == this.div) {
              dices_container.removeChild(dices_container.childNodes[j]);
              break;
            }   
          }      
          generatedDies.splice(i, 1);
          break;
        } 
      }
    });
    this.roll();
    dices_container.appendChild(this.div);
  }

  roll() {
    this.value = randomVal(1, 6);
    this.div.innerText = '';
    this.div.appendChild(document.createTextNode(this.value));
  }
}

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}