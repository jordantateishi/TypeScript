// display output to the terminal
let message:string = "Great!"

function greeting () {
	console.log(message);
}

greeting()

	// requirement 1 complete


// Recursion

function recurse(num: number): number {
	if (num > 10) {
		console.log("Done!");
	  	return num;
	} else {
		console.log(num);
	 	return recurse(num + 1);
	}
  }

recurse(1);
recurse(5);

	// requirement 2 complete


// Classes

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	idPerson() {
		console.log(`Name: ${this.name} Age: ${this.age} years old`);
	  }
}

const jordan = new Person('Jordan', 22);
const jord = new Person('Jord', 0);
jordan.idPerson();
jord.idPerson();

	// requirement 3 complete


// Lists

let courses: string[] = ['CSE212', 'CSE121C', 'CSE310']; // create a list 

console.log("First block classes:")
console.log(courses);
// log the classes for the first block

courses.push('CSE220C');
// add a class for the next block
courses.splice(1, 1); 
// remove the class that ended

console.log("Second block classes: ") // display output to terminal
console.log(courses);

	// requirement 4 complete


// Asynchronous functions

interface Joke {
	id: string;
	joke: string;
	status: number;
  }
  
async function getJoke(): Promise<Joke> {
	const response = await fetch('https://icanhazdadjoke.com/', {
	  headers: {
		Accept: 'application/json',
	  },
	});
	const joke = await response.json();
	return joke;
}
  
async function displayJoke() {
	try {
	  const joke = await getJoke();
	  console.log(joke.joke);
	} catch (error) {
	  console.error(error);
	}
}
  
displayJoke();

	// requirement 5 complete

