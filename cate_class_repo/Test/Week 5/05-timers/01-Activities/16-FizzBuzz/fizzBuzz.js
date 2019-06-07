
let numb = 1;


function checkThree() {
    let three = numb % 3;
        if (three == 0) {
            console.log("Fizz");
        } else {
            console.log(numb);
        }
};

function checkFive() {
    let five = numb % 5;
        if (five == 0) {
            console.log("Buzz");
        } else {
            console.log(numb);
        }   
}; 


function checkBoth() {
    let both = numb % (3 * 5);
    if (both == 0) {
        console.log("Fizz Buzz");
    } else {
        console.log(numb);
    }
}; 

function multiples() {

}


// Prime Number 

function isPrime(n) {
    for (x = 2; x < n/2; x++) {
        if (n % x === 0) {
            return false;
        }
    }
    return true;
}


function isPrime(n) {
    for (x = 2; x < n/2; x++) {
        if (n % x === 0) {
            return false;
        } 
    }
    return true;
}