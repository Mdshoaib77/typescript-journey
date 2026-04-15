// Basic Types
let username: string = "Shoaib";
let age: number = 24;
let isDeveloper: boolean = true;

// Function with types
function greet(name: string): string {
  return `Assalamualaikum, ${name}`;
}

console.log(greet(username));

// Object with type
type User = {
  name: string;
  id: number;
};

const user: User = {
  name: "Shoaib",
  id: 1,
};

console.log(user);