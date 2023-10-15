import { useLocation } from "react-router-dom";
export default function ThreeC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>3.{title}</h1>
      <p>
        In this section, we'll explore more advanced TypeScript features,
        including complex data types, type unions, type intersections, type
        guards, and mapped types.
      </p>
      <br />
      <h2 style={{ color: "lightBlue" }}>3.1 Complex Data Types</h2>
      <p>
        In TypeScript, you can work with complex data structures, such as arrays
        and objects, while maintaining type safety.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>3.1.1 Arrays</h3>
      <div className="codebox">
        let numbers: number[] = [1, 2, 3, 4, 5]; <br /> let words: string[] =
        ["apple", "banana", "cherry"];
      </div>
      <h3 style={{ color: "lightcoral" }}>3.1.2 Objects</h3>
      <div className="codebox">
        <pre>
          <code>{`let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};
`}</code>
        </pre>
      </div>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>3.2 Type Unions and Intersections</h2>
      <p>
        TypeScript allows you to combine and manipulate types using unions and
        intersections.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>3.2.1 Type Unions</h3>
      <p>Type unions allow a variable to have multiple possible types:</p>
      <div className="codebox">
        let result: number | string;
        <br />
        result = 42; // Valid <br />
        result = "Hello"; // Valid
      </div>
      <h3 style={{ color: "lightcoral" }}>3.2.2 Type Intersections</h3>
      <p>Type intersections combine multiple types:</p>
      <div className="codebox">
        <pre>
          <code>{`type Name = { firstName: string };
type Age = { age: number };

let person: Name & Age;
person = { firstName: "John", age: 30 };
`}</code>
        </pre>
      </div>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>3.3 Type Guards</h2>
      <p>
        Type guards help narrow down types within conditional statements. Common
        type guards include typeof, instanceof, and user-defined type guards.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>3.3.1 typeof Type Guard</h3>
      <div className="codebox">
        <pre>
          <code>{`function logLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // Works because value is now known to be a string.
  }
}
`}</code>
        </pre>
      </div>
      <h3 style={{ color: "lightcoral" }}>3.3.2 instanceof Type Guard</h3>
      <div className="codebox">
        <pre>
          <code>{`class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function petSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}
`}</code>
        </pre>
      </div>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>3.4 Mapped Types</h2>
      <p>
        Mapped types allow you to transform and create new types based on
        existing types.
      </p>
      <div className="codebox">
        <pre>
          <code>{`type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const person: ReadonlyPerson = {
  name: "Alice",
  age: 25,
};

person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
`}</code>
        </pre>
      </div>
      <p>
        By mastering these advanced TypeScript features, you'll be able to work
        with more complex data structures, handle multiple types effectively,
        and write type-safe code. <br /> In the next section, we'll delve into
        TypeScript's support for defining interfaces and creating classes.
      </p>
      <br />
      <hr />
      <br />
      <i style={{ color: "lightcoral" }}>
        The next section will cover "Functions and Interfaces" in TypeScript,
        focusing on creating interfaces for data structures and using classes
        for object-oriented programming.
      </i>
    </>
  );
}
