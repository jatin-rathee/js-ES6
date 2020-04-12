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



/* ------------------- Arrays ---------------------- */

/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.background = 'dodgerblue';
});


// ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

for(var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6 
const boxesArr6 = Array.from(boxes);
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }

    cur.textContent = 'I changed to blue!';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

/* ------------------- Spread operator ---------------------- */

/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum = addFourAges(18, 30, 12, 21);
console.log(sum);


// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);  


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


/* ------------------- REST parameters  ---------------------- */

/*
// -> same ... but opposite of spread operator

// ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18); 
    })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2020, 1987);


// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987); 



// ES5
function isFullAge5(limit) {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    // console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit); 
    })
}

// isFullAge5(22, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2020, 1987);


// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6(22, 1990, 1999, 1965, 2016, 1987); 
*/


/* ------------------- Default parameters  ---------------------- */

/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'indian' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var jatin = new SmithPerson('Jatin', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality; 
}

var jatin = new SmithPerson('Jatin', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/


/* ------------------- Maps ---------------------- */

/*
const question = new Map();
question.set('question', 'What is official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
// console.log(question.size);

// question.delete(4);

if (question.has(4)) {
    // question.delete(4);
    // console.log('Answer 4 is here');
}

// question.clear();


// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct ')));
*/


/* ------------------- Classes ---------------------- */

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var jatin5 = new Person5('Jatin', 2000, 'developer');


// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    // static method
    static greeting() {
        console.log('Hey there!');
    }
}

const jatin6 = new Person6('Jatin', 2000, 'developer');

Person6.greeting();