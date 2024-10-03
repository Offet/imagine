// Attaches a click event listener to the button element with id "btn"
const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let name = "Michael Hammond";
let age = 219;
let present = false;
console.log(name);

// Objects
const car = {
    numberPlate: "GG 4999 21",
    model: "Jaguar",
    color: "Black",
    weight: 70,
    weightUnit: "kg",
    owner: {
        name: "Ella Offet",
        maritalStatus: "Single",
        driver: {
            name: "Yaw Okakpo",
            gender: "Male",
        }
    }
}

// showing the number plate
console.log(car.numberPlate);
console.log(car.owner.driver.name); //driver's name logged
console.log(car);

// trying to see if the variable car which is a constant is mutable
car = {
    model: "Rolls Royce"
} 
/* The code above returned an error, signifying that the values in the car is immutable since we assigned 
"car" tp a constant variable. If you want your variable to be mutable, you have to use 
*let* followed by car to make it look like *let car*. This way, it can be mutable.*/

// changing driver's name
car.owner.driver.name = "Critical";

// changing the car model to porsche
car.model = "Range Rover"


// ARRAYs IN JS
const tweet1 = {
    text: "Today is a good day to try something new.",
    likes: 6890,
    shares: 120,
    retweets: 1789,
    comments: 357
  }
  
  const tweet2 = {
    text: "Cooking is a great skill to learn.",
    likes: 90,
    shares: 12,
    retweets: 17,
    comments: 35
  }
  
  // putting all two tweets together
  const tweets = []; //the symbol [] represent an array in js
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets;
  
  // Dates 
  const today = new Date();
  today.toString()
  today.toLocaleDateString()
  today.getHours()
  
  // If/Else Statements
  
  if (today.getHours() >= 9) {
    console.log("End class");
  } else {
    console.log("Class is still in session");
  }
  
// For Loops

for (let i = 0; i <10; i++) {
    console.log("Hello, how are you?", i);
  }


  // Functions
// Defining functions
function login(username, password) {
  if (username == 'Offet' && password == '1234')
  {
    return 'User is logged in!';
  } else if (username != "Offet") {
    return "Invalid username!"
  } else if (password != "1234") {
    return "Invalid password!"
  } else {
    return 'Invalid username or password!';
  }
}

// invoking functions
login("Offet", 1234);

// Basic Arithmetic
// Addition
12 + 4;
45 - 23;
7 * 12;
78 / 4;


// Comparison operators
2 != 2

//next try
let vs = [1, 2, 3, 4];
let max = Math.max(1, 2, 3, 4)
console.log("Max:", max)


// Order of operations
1 * 2 + 3 - 4 / 2 % 2


// New topic
// String Concatenation
const firstName = "ELla ";
const lastName = " Offet ";
firstName.trim() + " " + lastName.trim()

// Template Literal (New way of string concatenation)
// `${firstName.trim()}` `${lastName.trim()}`;

// Length
firstName.length

//Uppercase & Lowercase conversion
firstName.toLowerCase()
firstName.toUpperCase()

// Using charAt
lastName.charAt(1).toUpperCase()

firstName.trim().charAt(2).toUpperCase() + lastName.trim().charAt(2).toUpperCase()


// String Conversion
let mun = 2
mun.toString()

String(mun)




//            Class Exercise On Functions
// Write a function that will add a participant to our google classroom


let participants = []; //array of students
function addParticipant(studentName, cohort) {
  
  participants.push(studentName, cohort);
  // let participantName = {
  //   name: "Josh John",
  //   team: "Class Alpha",
  //   cohort: "Cohort 2"
  // }
  return "Participant added!"
 // console.log(`adding : ${participantName.name} in ${participantName.cohort} to ${paticipantName.class}`);
}


// addParticipant(name, team, cohort);
addParticipant()




//            Solution To Exercise
const participant = [];
function addParticipants(email) {
  // check if email was provided
  if (!email) { // the !email in brackets check if the email provided is null and does what the return says//
    return "Email not provided. Kindly input your email"
  }
  
  // checking if the email provided is valid
  if (!email.includes("@")) {
    return "Invalid email provided!"
  }
  
  // adding email to the participants list
  participants.push(email);
  // Notify them via mail
  // return response
  return "Participant added successfully!";
}

let mail = "nuellaemmanuella7003@gmail.com";
addParticipants(mail);



//              New Lesson
// Arrays In Javascript Continued
// adding strings in an array
const alphabets = ["d", "a", "c", "b"];
alphabets.sort();
// joining all the alphabets together
alphabets.join(" ");
// splitting the joined array
alphabets.join(" ").split(" ");




// 11th June 2024
// //  Exercise
// // Write a function that will take a user with first name and last name and return full name.
// const user = {
//   name : "Joojo",
//   surname  : "Koko",
// }
// function fullName(user) {
//   return `${user.name} ${user.surname}`;
// }

// fullName("Ella", "Offet");

// fullname(user);


// //  Array map
// const users = [
//   {firstname: "Linda", lastname: "Shetty"},
//   {firstname: "lol", lastname: "Shet"},
//   {firstname: "Lin", lastname: "Shy"},
//   {firstname: "Lindy", lastname: "hetty"},
//   {firstname: "Lina", lastname: "Shett"}
//   ]
 
// users.map(fullName)


// Example 2 In Map
// Map and return squares of numbers

function square(number) {
  return number ** 2;
}
const numbers = [0, 1, 2, 3, 4, 5]
numbers.map(square);

//  filtering to return even numbers
function even(number) {
  return number % 2 === 0;
}

numbers.filter(even);



// write a function that takes a user with name and dateOfBirth and return true if their birthday is today else false

// const user = {
//   name: "King Kunta",
//   dateOfBirth: "1990-06-12",
// };

function isBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}
isBirthday(user);

// write a function that takes a user with name and dateOfBirth and return birthday, with username if their birthday is today else return not your day

function getBirthdayMessage(user) {
  const today = new Date();
  const userBirthday = new Date(user.dateOfBirth);

  if (
    today.getMonth() === userBirthday.getMonth() &&
    today.getDate() === userBirthday.getDate()
  ) {
    const age = today.getFullYear() - userBirthday.getFullYear();
    return `Happy birthday, ${user.name}! You are ${age} years old today!`;
  } else {
    return "Not your day!";
  }
}

getBirthdayMessage(user);




// Bottle class
class Bottle {
  constructor(color, shape, volume) {
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }

  getInfo() {
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
}

const bottle1 = new Bottle('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle('yellow', 'square', 100);
bottle2.getInfo();



// Object methods

const bottle = {
  color: 'red',
  shape: 'square',
  volume: 100,
  getInfo: function () {
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
}

bottle.color;
bottle.getInfo();
