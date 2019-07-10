


console.log(parseFloat(process.argv[2]) === parseFloat(process.argv[3]));

// OR

let a = process.argv[2];
let b = process.argv[3];

if (a === b) {
    console.log(true);
}
else {
    console.log(false); 
}