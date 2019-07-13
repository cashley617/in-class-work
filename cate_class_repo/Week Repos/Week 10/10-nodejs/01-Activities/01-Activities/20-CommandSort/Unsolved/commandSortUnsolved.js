// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================


// * Starting from a blank file, create a Node - based command - line application 
// that takes in a series of numbers from the user and returns 
// the numbers sorted in ascending order.


let nodeArg = process.argv; 

let numArray = []; 

for (let i = 2; i < nodeArg.length; i++) { 
    numArray.push(parseFloat(nodeArg[i]));
}; 

console.log(numArray); 

console.log(numArray.sort(sortNums)); 



function sortNums(a, b) {
    return (a-b); 
}

