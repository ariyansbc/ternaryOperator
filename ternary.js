

var age = 15;
const isAdult = age < 18 ? getAge(age) : "adult";

function getAge(age){
    const reqAge = 18 - age;
    return `require age to get adult: `+ reqAge;
}
console.log(isAdult);

//handle null values

const greeting = person => {
    let getPerson = person ? person.name : 'stranger'
    return `hello ${getPerson}`;
}
console.log(greeting({name: `jalal`}));
console.log(greeting(null));

//chaining ternary operator
const firstCheck = false,
      secondCheck = false,
      access = firstCheck ? "access denied" : secondCheck ? "access denied" : "access granted";
    console.log(access);