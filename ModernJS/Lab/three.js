function logger(name, location, favFood) {
  console.log(`${name} from ${location} likes ${favFood}`);
}

function namelogger(name) {
  name = [...name];
  for(var i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}

let arr = ["Paul", "Birmingham", "Kimchi"];
let myName = 'Talal Ahmed';
logger(...arr);
namelogger(myName);