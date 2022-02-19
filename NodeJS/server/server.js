const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../data.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
  if(err) {
    console.log(err);
  }

  setTimeout(() => {
    fs.appendFileSync(dataPath, '{\n"data": [\n');
    JSON.parse(body).data.children.forEach((item, idx) => {
      var title = item.data.title.replaceAll('"', '');
      fs.appendFileSync(dataPath, '{\n"title": "' + title + '",\n');
      fs.appendFileSync(dataPath, '"url": "' + item.data.url + '",\n');
      if (idx != JSON.parse(body).data.children.length - 1) {
        fs.appendFileSync(dataPath, '"author": "' + item.data.author + '"\n},\n');
      } else {
        fs.appendFileSync(dataPath, '"author": "' + item.data.author + '"\n}\n');
      }
    })
    fs.appendFileSync(dataPath, ']\n}');
  }, 5000);

})