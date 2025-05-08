# Interview Question 1: 

What is the use of the keyof keyword in TypeScript? Provide an example.

--> In TypeScript, keyof is used to get all the keys of an object as a type. It’s like saying, “Give me a list of the property names of this object.”

Example: 
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
// PersonKeys is now "name" | "age"

So if you use keyof Person, you're saying: "Give me a type that’s either 'name' or 'age'." It’s helpful when you want to make your code more flexible and safe, especially when working with objects.


# Interview Question 2: 

How does TypeScript help in improving code quality and project maintainability?

