var fs = require('fs');
var path = require('path');
var dir = './Logs';


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
    
}


for (var i = 0; i < 10; i++) {
    fs.writeFile(path.join(dir, `log${i}.txt`), `This is log${i}`, function (err) {
        if (err) throw err;
    })
    console.log(`Created file log${i}.txt`)
}

