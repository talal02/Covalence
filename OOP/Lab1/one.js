const MAX = 800;
let container = document.getElementById('square-container');
class Square {
  constructor(x, y, size) {
    this.div = document.createElement('div');
    this.div.classList.add('square');
    this.div.style.left = `${x}px`;
    this.div.style.top = `${y}px`;
    this.div.style.width = `${size}px`;
    this.div.style.height = `${size}px`;
    this.updateColor();
    this.div.addEventListener('click', () => {
      this.updateLocation();
    });
    container.appendChild(this.div);
  }

  updateColor() {
    let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
    this.div.style.backgroundColor = randomColor;
  }

  updateLocation() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
    let size = randomVal(25, 250);
    this.div.style.left = `${xVal}px`;
    this.div.style.top = `${yVal}px`;
    this.div.style.width = `${size}px`;
    this.div.style.height = `${size}px`;
    this.updateColor();
  }

}

let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare() {
  let xVal = randomVal(0, MAX);
  let yVal = randomVal(0, MAX);
  let size = randomVal(25, 100);
  let sq = new Square(xVal, yVal, size);
}

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}