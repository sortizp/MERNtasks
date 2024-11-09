// Assignment 5.1

// Implement the 'squareNumbers' function, which takes in an array of numbers
// And returns a new array that contains the square of each number of the original array.

// Task 1
const numbers = [2,4,8,7,6,3,9]

function squareNumbers(array) {
    let squareArray =[];
    for(const square of array) {
      let sq = square * square;
      squareArray.push(sq);
    }
    return squareArray;
  }

  //console.log(squareNumbers(numbers));

// Implement the 'filterEvenNumbers' function, which takes in an array of numbers
// And returns a new array that contains only the even numbers from the given array.
// Your code here

// Task 2
function filterEvenNumbers(array){
    const evenNumbers = []
    for(const numbers of array) {
      if(numbers % 2 === 0 ) {
        evenNumbers.push(numbers)
      }
    }
    return evenNumbers
  }

//  console.log(filterEvenNumbers(numbers));

// Implement a function 'sumNumbers' that takes in an array of numbers as its argument
// And returns the sum of the numbers in that array.
// Your code here

// Task 3
function sumNumbers1 (numbers){
    let sum = 0
    for(const number of numbers){
      sum +=number
    }
    return sum
  }

  function sumNumbers2 (numbers){
    let sum = 0
    numbers.forEach(number => {
      sum += number
    })
    return sum
  }

 // console.log(sumNumbers1(numbers));


 // Implement a function 'calculateAverageLength' that takes in an array of strings as its argument
// And returns the average length of the strings in that array.
// For this, you would need to use the 'length' property available on both arrays and strings
// Your code here
const arr = ["hello","hey"]

// Task 4
function calculateAverageLength(arr) {

    if (arr.length === 0) {
        return 0; // Empty array check: Return 0 for an empty array
      }

    let totalLength = 0;
    let numberOfWords = arr.length
    for (let str of arr) {
      totalLength += str.length;
    }
  
    return totalLength / numberOfWords;
  }

function lengthOfStringArray (arr) {
    return arr.join("").length / arr.length
}

//console.log(stringArray(arr));
//console.log(calculateAverageLength(arr));


// Assignment 5.2 Array Manipulation
// Task 1 - Push 5 items (objects) into the students array
const students = []
function addStudent(students, id, name, age, grade) {

  let newStudent = {
    id,
    name,
    age,
    grade
  }
  students.push(newStudent)

}

addStudent(students,1,"Iris",31,99);
addStudent(students,2,"Jose",32,99);
addStudent(students,3,"Sterling",33,99);
addStudent(students,4,"Pom",34,99);
addStudent(students,5,"Moggi",35,99);
//console.log(students);

// Remove first or last element in an array
// Task 3
export default function removeStudent(students,order){

	if(order == "first") {
		order = students.shift() // remove the first item
	}else if(order == "last") {
		order = students.pop() // remove the last
	}else{
		order = "The order is invalid"
	}
	return order
}

// Using the .find()
function removeStudentByName1 (students, studentName) {
  
  //The line of code below finds the item
	let removeStudent = students.find(student => student.name === studentName);

  let studentIndex = -1
  if(removeStudent){
    studentIndex = students.findIndex(index => index.name == studentName)
    console.log(studentIndex);
    students.splice(studentIndex, 1)
  }else{
    removeStudent = "Student not found with that name"
  }

  return removeStudent

}

//Codio test is PASS
function removeStudentByName2 (students, studentName) {
  
  let studentIndex = -1;

  for(let i = 0; i < students.length; i++) {
    if(students[i].name === studentName) {
      studentIndex = i;
      break;
    }
  }

  if(studentIndex === -1) {
    return `No student found with that name - ${studentName}.`;
  }

  let removedStudent = students.splice(studentIndex, 1);

  return removedStudent;

}


// RE-ORDER ELEMENTS IN AN ARRAY
function reorderStudent (students, studentName, newIndex) {

  if (newIndex >= students.length) {
    return `${newIndex} is out of the limits of the array.`;
  }

  if(students[newIndex] && students[newIndex].name === studentName) {
    return `The student with the name "${studentName}" is already at index ${newIndex}.`;
  } 

  let studentToReorder = null;

  for(let i = 0; i < students.length; i++) {
    
    if(students[i].name === studentName) {
      studentToReorder = students[i];
      students.splice(i, 1);
      break;
    }
  }

  if(studentToReorder === null) {
    return `Student found with the name ${studentName}.`
  }

  students.splice(newIndex, 0, studentToReorder);

  return studentToReorder;

}

//console.log(removeStudentByName1(students,'Jose'))
//console.log(reorderStudent(students, "Moggi", 5));
//console.log(students);

const shoppingCart = [
  {
      product: {
          name: "Detergent",
          price: 100
      },
      quantity: 2
  },
  {
      product: {
          name: "Dog Food",
          price: 20
      },
      quantity: 5
  }
]

// ANONYMOUS FUNCTIONS & FAT ARROWS =>
// 5.3, Task 1
// Add an item to the cart
const findProduct = ( cartItem, productName) => cartItem.product.name === productName;

//Task 2
// Display Item info ...? 
//question: How does it know which item is grabing 
//if we're not giving it a specific item
const displayItemInfo = (item, index) => {
  console.log(`Item ${index+1}: ${item.product.name} - Price:$${item.product.price}, Quantity: ${item.quantity}`);
}

// Task 3: Calculate the Cart Total
//Traditional function
function includeItemTotal1(currentCartTotal, cartItem) {
  // Calculate the total cost of the current cart item and add it to the running total
  currentCartTotal += cartItem.quantity * cartItem.product.price;
  return currentCartTotal;
}
// using fat arrow =>
const includeItemTotal = (currentTotal, cartItem) => currentTotal + cartItem.product.price * cartItem.quantity;

// Assignment 5.4

// Task 4
// VIP Party
function vipSection() {
  const vipGuests = guestList.filter((guest) => guest.isVip);

  function grantAccess() {
    // Use the 'map' function to create the array of objects with a pass for each VIP guest
    return vipGuests.map((guest) => ({
      name: guest.name,
      vipPass: `Welcome, ${guest.name}! You have exclusive access to the VIP section.`
    }));
  }

  return grantAccess;
}

// Example usage:
const guestList = [
  { name: "John Doe", isVip: true },
  { name: "Jane Smith", isVip: false },
  { name: "Alice Johnson", isVip: true },
  { name: "Bob Brown", isVip: false }
];

//const getVipAccess = vipSection();
//console.log(getVipAccess());


// *** Assignment 5.5 ***
// Task 3
let myLibrary = [];

function createBook(title, author) {
	const book = {
		title,
		author
	};
	return book;
}

function addBook(library, title, author) {
	const newBook = createBook(title, author);
	library.push(newBook);
}

addBook(myLibrary, "1984", "George Orwell");
addBook(myLibrary, "Brave New World", "Aldous Huxley");
addBook(myLibrary, "Thinking Fast and Slow", "Daniel Kahnemann");
addBook(myLibrary, "To Kill a Mockingbird", "Harper Lee");

// Updates the number of times a book with the given title has been borrowed in a library.
function updateBorrowCount(library, bookTitle) {
	// Finding the book in the library
	const book = library.find((b) => b.title === bookTitle);

	// If the book isn't found, log the message and return
	if(!book) {
		// Log a message that says "Book not found"
		 console.log("Book not found.");
		 return;
	} else {

		// Task: Check if the book has a 'borrowed' property. If not, add it and set it to 1.
		// If it does, increment its value by 1.
		if(!book.hasOwnProperty('borrowed')) {
			book.borrowed = 1;
		}else{
			book.borrowed += 1;
		}
	}
}
// Test the function by updating borrow count of a book
//updateBorrowCount(myLibrary, "1984");
//console.log(myLibrary);
// Task 4
function acceptBook (book, library, existingBookAction, newBookAction) {

  const foundBookTitle = library.find((item) => item.title === book.title);
  const foundBookAuthor = library.find((item) => item.author === book.author);

  if(foundBookTitle && foundBookAuthor) {
    existingBookAction(library, book.title);
  } else if(!foundBookTitle && !foundBookAuthor){
    newBookAction(library, book.title, book.author);
  }
}

/// Task 5
function getBookRecommendation(myLibrary, recommendationFunction, recommendationCriteria) {
  
  // Filter the books that meet the criteria using the recommendationFunction
  const recommendedBooks = [];
  for (const book of myLibrary) {
    // Call the `recommendationFunction` with `recommendationCriteria` and `book`
    const isBookRecommended = recommendationFunction(recommendationCriteria, book);
    
    if (isBookRecommended) {
      recommendedBooks.push(book);
    }
  }
  return recommendedBooks;
}

// Example recommendation function
function recommendationFunction(recommendationCriteria, book) {
  // Check if the book meets the recommendation criteria (e.g., by genre)
  return book.genre === recommendationCriteria;
}

const criteria = "Dystopian"; // Example criteria for finding books by genre
const recommendedBooks = getBookRecommendation(myLibrary, recommendationFunction, criteria);

//console.log(recommendedBooks);

// Examining anonymous functions
var Module = (function() {
  var _private = 'hey';
  function _privateMethod () {
    console.log(_private);
  }
  return {
    publicMethod : function (){_privateMethod();}
  }
})


// *** Assignment 5.1
// Task 1 
// Function to generate random temperature data for a city
function generateRandomTemperatureData(city, minTemp, maxTemp) {
  // Array to hold 7 random temperature values for each day of the week
  const temperatureData = [];

  for (let i = 0; i < 7; i++) {
    // Generate a random integer between minTemp and maxTemp (inclusive)
    const randomTemp = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
    temperatureData.push(randomTemp);
  }

  // Return an object containing the city name and the temperature data array
  return {
    city: city,
    temperatureData: temperatureData
  };
}

// Function to initialize temperature data for multiple cities
function initializeCityData(cities) {
  // Array to hold temperature data for each city
  const cityData = [];

  // Iterate over the cities array and generate temperature data for each
  for (const city of cities) {
    const cityTempData = generateRandomTemperatureData(city.name, city.minTemp, city.maxTemp);
    cityData.push(cityTempData);
  }

  // Return the array containing temperature data for each city
  return cityData;
}

// Example usage:
const cities = [
  { name: "New York", minTemp: -5, maxTemp: 35 },
  { name: "Los Angeles", minTemp: 10, maxTemp: 30 },
  { name: "Chicago", minTemp: -10, maxTemp: 25 }
];

const cityTemperatureData = initializeCityData(cities);
//console.log(cityTemperatureData);

// Task 5
// Implement the findDayWithHighestTemperature function here
function findDayWithHighestTemperature(temperatureData) {
  let highestTemp = temperatureData[0];
  let dayWithHighestTemp = 0;

  for (let i = 1; i < temperatureData.length; i++) {
    if (temperatureData[i] > highestTemp) {
      highestTemp = temperatureData[i];
      dayWithHighestTemp = i;
    }
  }

  return dayWithHighestTemp;
}

// Implement the findDayWithLowestTemperature function here
function findDayWithLowestTemperature(temperatureData) {
  let lowestTemp = temperatureData[0];
  let dayWithLowestTemp = 0;

  for (let i = 1; i < temperatureData.length; i++) {
    if (temperatureData[i] < lowestTemp) {
      lowestTemp = temperatureData[i];
      dayWithLowestTemp = i;
    }
  }

  return dayWithLowestTemp;
}


function getHighestAndLowestDays(cityData) {
  // Loop over city data
  // Each item of 'cityData' array is an object that has two properties:
  // city, a string which stores the name of the city, and
  // temperatureData, an array of numbers depicting the daily average temperature
  // Implement the functions 'findDayWithHighestTemperature' and 'findDayWithLowestTemperature' with the 'temperatureData' array as its argument
  // Log the result for each city to the console
  for (const city of cityData) {
    const dayWithHighestTemp = findDayWithHighestTemperature(city.temperatureData);
    const dayWithLowestTemp = findDayWithLowestTemperature(city.temperatureData);

    console.log(`City: ${city.city}`);
    console.log(`Day with Highest Temperature: Day ${dayWithHighestTemp + 1}`);
    console.log(`Day with Lowest Temperature: Day ${dayWithLowestTemp + 1}`);
    console.log('--------------------------------');
  }

}

const cities2 = [
  { city: "New York", temperatureData: [15, 22, 30, 28, 25, 32, 27] },
  { city: "Los Angeles", temperatureData: [18, 24, 26, 29, 21, 19, 25] },
  { city: "Chicago", temperatureData: [10, 15, 8, 5, 12, 20, 14] }
];

//getHighestAndLowestDays(cities2);