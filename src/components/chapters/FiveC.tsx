import { useLocation } from "react-router-dom";
export default function FiveC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>5. {title}</h1>
      <p>
        In this section, we'll explore object-oriented programming (OOP) in
        TypeScript by learning how to define classes, implement inheritance, and
        work with access modifiers.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>5.1 Defining Classes</h2>
      <p>
        Classes are a fundamental concept in TypeScript, allowing you to create
        blueprints for objects.
      </p>
      <br />
      <h3 style={{ color: "lightCoral" }}>5.1.1 Class Definition</h3>
      <p>Let's start by defining a simple class representing a Person:</p>
      <div className="codebox">
        <pre>
          <code>{`class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name} and I'm \${this.age} years old.\`);
  }
}
`}</code>
        </pre>
      </div>
      <ul style={{ marginLeft: "20px" }}>
        <li>The Person class has two properties: name and age.</li>
        <li>It has a constructor method to initialize these properties.</li>
        <li>The greet method logs a greeting message.</li>
      </ul>
      <br />
      <h3 style={{ color: "lightCoral" }}>
        5.1.2 Creating Objects from Classes
      </h3>
      <p>You can create objects from the class blueprint:</p>
      <div className="codebox">
        <pre>
          <code>{`const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet();  // Output:  Hello, my name is Alice and I'm 30 years old.
person2.greet();  // Output:  Hello, my name is Bob and I'm 25 years old.
`}</code>
        </pre>
      </div>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>5.2 Inheritance</h2>
      <p>
        Inheritance allows you to create a new class (the "subclass") that
        inherits properties and methods from an existing class (the
        "superclass").
      </p>
      <br />
      <h3 style={{ color: "lightCoral" }}>5.2.1 Base Class (Superclass)</h3>
      <p>Let's create a base class for a Vehicle:</p>
      <div className="codebox">
        <pre>
          <code>
            {`class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return \`\${this.make} \${this.model}\`;
  }
}
`}
          </code>
        </pre>
      </div>
      <br />
      <h3 style={{ color: "lightCoral" }}>5.2.2 Derived Class (Subclass)</h3>
      <p>Now, create a derived class Car that inherits from Vehicle:</p>
      <div className="codebox">
        <pre>
          <code>
            {`class Car extends Vehicle {
  numWheels: number;

  constructor(make: string, model: string, numWheels: number) {
    super(make, model); // Call the superclass constructor
    this.numWheels = numWheels;
  }

  drive() {
    console.log(\`Driving my \${this.getInfo()} with \${this.numWheels} wheels.\`);
  }
}
`}
          </code>
        </pre>
      </div>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          The Car class inherits the properties and methods of the Vehicle
          class.
        </li>
        <li>It has its own property, numWheels, and a method, drive.</li>
      </ul>
      <br />
      <h3 style={{ color: "lightCoral" }}>
        5.2.3 Using Inherited Properties and Methods
      </h3>
      <p>Create a Car object and use inherited properties and methods:</p>
      <div className="codebox">
        <pre>
          <code>
            const myCar = new Car("Toyota", "Camry", 4);
            <br />
            console.log(myCar.getInfo()); // Output: Toyota Camry <br />
            myCar.drive(); // Output: Driving my Toyota Camry with 4 wheels.
          </code>
        </pre>
      </div>
      <br />
      <br />
      <h2 style={{ color: "lightBlue" }}>5.3 Access Modifiers</h2>
      <p>
        Access modifiers control the visibility and accessibility of class
        members (properties and methods).
      </p>
      <br />
      <ul style={{ marginLeft: "20px" }}>
        <li>public: Members are accessible from anywhere.</li>
        <li>private: Members are only accessible within the class.</li>
        <li>
          protected: Members are accessible within the class and derived
          classes.
        </li>
      </ul>
      <br />
      <h3 style={{ color: "lightCoral" }}>
        5.3.1 Example with Access Modifiers
      </h3>
      <div className="codebox">
        <pre>
          <code>{`class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  public bark() {
    console.log(\`\${this.name} (a \${this.breed}) barks.\`);
  }
}
`}</code>
        </pre>
      </div>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          The name property in the Animal class is private, making it accessible
          only within the class.
        </li>
        <li>
          The makeSound method is public, allowing it to be called from outside.
        </li>
      </ul>
      <br />
      <p>
        By mastering classes, inheritance, and access modifiers in TypeScript,
        you'll be well-equipped to create complex object-oriented programs. In
        the next section, we'll explore the use of generics for creating
        reusable components.
      </p>
      <br />
      <hr />
      <br />
      <i style={{ color: "lightCoral" }}>
        The next section will focus on "Generics in TypeScript" and how to use
        type parameters for creating reusable components.
      </i>
    </>
  );
}
