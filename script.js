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

/*
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
*/



/* ------------------- Strings ---------------------- */

/*
let firstName = 'Jatin';
let lastName = 'Rathee';
const yearOfBirth = 2000;

function calcAge(year) {
    return 2020 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 -> Template strings 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/


/* ------------------- Arrow functions ---------------------- */

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2020 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Ages element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Ages element ${index + 1}: ${age}.`
});

console.log(ages6);
*/


/* ------------------- Lexical Arrow functions ---------------------- */

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

// box5.clickMe();

// ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

// box6.clickMe();
*/

/*
// ES6
var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe(); 



function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this))

    console.log(arr);
;}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Jatin').myFriends5(friends);



// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Mike').myFriends6(friends);

*/




/* ------------------- Destructuring ---------------------- */

/*
// ES5
var jatin = ['jatin', 19];
// var name = jatin[0];
// var age = jatin[1];

// ES6
const [name, age] = ['Jatin', 19];
console.log(name);
console.log(age);

const obj = {
    firstName: 'Jatin',
    lastName: 'Rathee'
};

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);

// ES5
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);

console.log(age, retirement);
*/
