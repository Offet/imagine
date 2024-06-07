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


let vs = [1, 2, 3, 4];
let max = Math.max(1, 2, 3, 4)
console.log("Max:", max)


// Order of operations
1 * 2 + 3 - 4 / 2 % 2



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




