/* ------------------- let and const ---------------------- */

/*
// ES5
var name5 = 'Jatin Rathee';
var age5 = 19;
name5 = 'Sam Rathee';
console.log(name5);

// ES6
const name6 = 'Jatin Rathee';
let age6 = 19;
name6 = 'Sam Rathee';
console.log(name6);


// ES5
function driverLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'Jatin';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');

}

driverLicence5(true);


// ES6
// let and const are not function scoped but instead block scoped.
function driverLicence6(passedTest) {
   
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'Jatin';
    }

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.');

}

driverLicence6(true);

// ES5
var i = 23;

for(var i=0; i<5; i++) {
    console.log(i);
}

console.log(i);

// ES6
let j = 23;

for(let j=0; j<5; j++) {
    console.log(j);
}

console.log(j);
*/

/* ------------------- Blocks and IIFEs ---------------------- */

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a, b);
console.log(c);

// ES5
(function() {
    var c = 3;
})();

console.log(c);