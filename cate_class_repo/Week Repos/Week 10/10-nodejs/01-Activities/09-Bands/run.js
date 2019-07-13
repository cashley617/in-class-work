
let bands = require("./bands");

let string1 = "";


for (var property1 in bands) {
    string1 += bands[property1];
}

console.log(string1);