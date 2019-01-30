


const fs = require('fs');



let callback = (data, err) => {
    console.log("------------------------");
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log("------------------------");
}

// IO-1
console.log(process.pid + " reading veg menu...");
fs.readFile('./veg-menu.txt', 'utf8', callback)
// IO-2
console.log(process.pid + " reading non-veg menu...");
fs.readFile('./non-veg-menu.txt', 'utf8', callback)
