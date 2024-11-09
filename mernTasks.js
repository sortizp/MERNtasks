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