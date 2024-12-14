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

// Task 4
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

getHighestAndLowestDays(cities2);

// Task 2
function calculateAverage(temperatures) {
  const total = temperatures.reduce((sum, temp) => sum + temp, 0); // Sum up all temperatures
  return total / temperatures.length; // Calculate average
}

function calculateMin(temperatures) {
  return Math.min(...temperatures); // Find minimum temperature
}

function calculateMax(temperatures) {
  return Math.max(...temperatures); // Find maximum temperature
}

function analyzeCityTemperatures(cityData) {
  // Array to hold the analysis data for each city
  const analyzedData = [];

  cityData.forEach((city) => {
    const averageTemperature = calculateAverage(city.temperatureData);
    const minTemperature = calculateMin(city.temperatureData);
    const maxTemperature = calculateMax(city.temperatureData);

    // Push the analysis for the current city into the array
    analyzedData.push({
      city: city.city, // City name
      averageTemperature: averageTemperature,
      minTemperature: minTemperature,
      maxTemperature: maxTemperature,
    });
  });

  return analyzedData;
}


// TASK 3
// Function to find the city with the highest average temperature
function findCityWithHighestAverage(analyzedData) {
  let highestCity = analyzedData[0]; // Assume the first city has the highest average
  for (const city of analyzedData) {
    if (city.averageTemperature > highestCity.averageTemperature) {
      highestCity = city; // Update highestCity if a higher average is found
    }
  }
  return highestCity.city; // Return the name of the city
}

// Function to find the city with the lowest average temperature
function findCityWithLowestAverage(analyzedData) {
  let lowestCity = analyzedData[0]; // Assume the first city has the lowest average
  for (const city of analyzedData) {
    if (city.averageTemperature < lowestCity.averageTemperature) {
      lowestCity = city; // Update lowestCity if a lower average is found
    }
  }
  return lowestCity.city; // Return the name of the city
}

// Function to compare city temperatures and return the results
function compareCityTemperatures(analyzedData) {
  return {
    cityHighestAvg: findCityWithHighestAverage(analyzedData),
    cityLowestAvg: findCityWithLowestAverage(analyzedData),
  };
}

// Assignment 5.2
function addStudent(students, id, name, age, grade) {
  const newStudent = {
      id: id,
      name: name,
      age: age,
      grade: grade
  }
  students.push(newStudent)
}


function removeStudent(students,order){
if(order == "first") {
  order = students.shift()
}else if(order == "last") {
  order = students.pop()
}else{
  order = "The order is invalid"
}
return order
}

function removeStudentByName (students, studentName) {

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
}

// Assignment 5.5
// Task 3 - Updating the Number of Times a Book Has Been Borrowed
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
updateBorrowCount(myLibrary, "Brave New World");
console.log(myLibrary);