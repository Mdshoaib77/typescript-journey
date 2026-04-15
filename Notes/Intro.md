### 🚀 TypeScript – Overview & Introduction

The primary goal of TypeScript is to add **Types** to JavaScript. It is a **"Superset,"** meaning all valid JavaScript code is also valid TypeScript code. However, it provides powerful additional features that help maintain and manage large-scale projects.

Below is a brief overview and introduction to TypeScript:

---

### **1. What is TypeScript? (Introduction)**

TypeScript is an open-source programming language developed by Microsoft. It is often described as **"JavaScript with Syntax for Types."** In simple terms:

* **Static Typing:** In JavaScript, errors are usually caught during execution ( **Runtime** ). In TypeScript, errors are detected while writing the code or during compilation.
* **Transpiler:** Browsers cannot understand TypeScript directly, so it converts ( **Compiles** ) the code into standard JavaScript.
* **Scale:** It is specifically designed for building large applications that involve hundreds of files.

---

### **2. Core Features**

#### **A. Types by Inference**

TypeScript is smart enough to automatically figure out the data type of a variable in many cases.

**TypeScript**

```
let message = "Hello World"; // TypeScript knows this is a 'string'
// message = 10; // This will show an error because you can't assign a 'number' to a 'string'
```

#### **B. Defining Types with Interfaces**

When you create an object, you can define a specific **"Shape"** or structure for it.

**TypeScript**

```
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Rahim",
  id: 1,
};
```

#### **C. Composing Types**

You can create complex types by combining multiple simple ones:

* **Unions:** A variable can be one of several types. For example: `string | number`.
* **Generics:** Using types as variables. For example: `Array<string>` (a list containing only strings).

---

### **3. Why Use It? (Benefits)**

* **Bug Prevention:** You see type errors before you even run the code.
* **Auto-completion:** Using TypeScript in editors like VS Code provides excellent intelligent suggestions (IntelliSense).
* **Readability:** By looking at the code, it’s easy to understand what inputs a function requires and what it outputs.
* **Refactoring:** Making changes in a large codebase becomes much safer and easier.

---

### **4. Installation**

To add TypeScript to your project, type the following command in your terminal:

**Bash**

```
npm install -D typescript
```


###Alhamdulliah Basic.ts Basic Code

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
