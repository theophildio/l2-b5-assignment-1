# Interview Question 1: 

**What is the use of the keyof keyword in TypeScript? Provide an example.**

✅  In TypeScript, keyof is used to get all the keys of an object as a type. It’s like saying, “Give me a list of the property names of this object.”

### Example: 
```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys will be: "name" | "age"

So if you use keyof Person, you're saying: "Give me a type that’s either 'name' or 'age'." It’s helpful when you want to make your code more flexible and safe, especially when working with objects.


# Interview Question 2: 

**How does TypeScript help in improving code quality and project maintainability?**

✅  TypeScript makes your code better and easier to manage by adding types. It helps catch mistakes while you're writing code, not after you run it. This means fewer bugs and less time spent fixing issues later.

💡 How it helps:
- **Early error detection** – You get errors while coding, so you fix them early.
- **Better code suggestions** – Editors like VS Code show helpful hints because TypeScript knows what types you’re working with.
- **Easier to understand** – When types are clear, it's easier for others (and future you) to read and understand the code.
- **Refactoring is safer** – If you change something, TypeScript will tell you what else needs to be updated.

In short, TypeScript helps you write clean, clear, and safe code—especially in bigger projects.
