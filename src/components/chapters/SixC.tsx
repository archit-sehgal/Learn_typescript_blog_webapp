import { useLocation } from "react-router-dom";
export default function SixC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>6.{title}</h1>
      <p>
        In this section, we'll explore the powerful feature of generics in
        TypeScript, which allows you to create reusable components and functions
        that work with a variety of data types.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>6.1 Introduction to Generics</h2>
      <p>
        Generics provide a way to define functions, classes, and interfaces that
        operate on a range of data types. This enhances code reusability and
        type safety.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>6.1.1 Basic Example</h3>
      <p>
        Let's start with a basic example of a generic function that swaps the
        values of two variables:
      </p>
      <div className="codebox">
        <pre>
          <code>
            {`function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

const result = swap(10, 20);
console.log(result); // Output: [20, 10]
`}
          </code>
        </pre>
      </div>
      <p>
        In this example, the function swap uses a type parameter T to work with
        any data type.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>6.2 Creating Generic Functions</h2>
      <p>
        Generic functions can be applied to a wide range of use cases. Here's an
        example of a generic function that prints the elements of an array:
      </p>
      <div className="codebox">
        <pre>
          <code>{`function printArray<T>(arr: T[]): void {
  for (const item of arr) {
    console.log(item);
  }
}

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"];

printArray(numbers);
printArray(fruits);
`}</code>
        </pre>
      </div>
      <p>
        The printArray function uses a type parameter T to work with arrays of
        any data type.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>6.3 Generic Classes</h2>
      <p>
        Classes can also be generic. Here's an example of a generic Box class
        that can hold values of various types:
      </p>
      <div className="codebox">
        <pre>
          <code>{`class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello, TypeScript!");

console.log(numberBox.getValue()); // Output: 42
console.log(stringBox.getValue()); // Output: Hello, TypeScript!
`}</code>
        </pre>
      </div>
      <p>
        The Box class uses a type parameter T to specify the type of value it
        can hold.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>6.4 Constraints in Generics</h2>
      <p>
        You can add constraints to restrict the types that can be used with
        generics. For instance, you might want to ensure that the data type used
        with a generic function has a particular method.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>6.4.1 Example with Constraints</h3>
      <div className="codebox">
        <pre>
          <code>
            {`interface Printable {
  print(): void;
}

function printIfPrintable<T extends Printable>(item: T): void {
  item.print();
}

class Book implements Printable {
  print() {
    console.log("Printing a book.");
  }
}

class Car {
  drive() {
    console.log("Driving a car.");
  }
}

const book = new Book();
const car = new Car();

printIfPrintable(book); // Output: Printing a book.
printIfPrintable(car); // Error: 'print' does not exist on type 'Car'.
`}
          </code>
        </pre>
      </div>
      <p>
        In this example, the printIfPrintable function accepts only types that
        implement the Printable interface. <br />
        By mastering generics in TypeScript, you'll be able to write more
        versatile and reusable components that work with a wide range of data
        types. In the next section, we'll explore TypeScript's support for
        modules and namespaces, enabling better code organization and
        encapsulation.
      </p>
      <br />
      <hr />
      <br />
      <i style={{ color: "lightcoral" }}>
        The next section will cover "Modules and Namespaces" in TypeScript,
        explaining how to organize your code into separate modules and
        namespaces for better code organization and encapsulation.
      </i>
    </>
  );
}
