import { useLocation } from "react-router-dom";
export default function FourC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>4. {title}</h1>
      <p>
        In this section, we'll explore how to define functions with type
        annotations, parameters, and return types. <br /> We'll also discuss the
        creation and use of interfaces to specify object shapes
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>4.1 Functions in TypeScript</h2>
      <p>
        In TypeScript, functions can have explicit type annotations for their
        parameters and return values, enhancing type safety.
      </p>
      <br />
      <h3 style={{color:"lightCoral"}}>4.1.1 Function Parameters</h3>
      <p>You can specify the types of function parameters:</p>
      <div className="codebox">
        <pre>
          <code>{`function add(a: number, b: number): number {
  return a + b;
}
`}</code>
        </pre>
      </div>
      <p>
        Here, a and b are expected to be numbers, and the function returns a
        number.
      </p>
      <br />
      <h3 style={{color:"lightCoral"}}>4.1.2 Function Return Types</h3>
      <p>You can also specify the return type of a function:</p>
      <div className="codebox">
        <pre>
          <code>
            {`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`}
          </code>
        </pre>
      </div>
      <p>
        This function takes a name parameter of type string and returns a
        string.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>4.2 Interfaces</h2>
      <p>
        Interfaces in TypeScript allow you to define and enforce the shape of
        objects. They are particularly useful when working with complex data
        structures.
      </p>
      <br />
      <h3 style={{color:"lightCoral"}}>4.2.1 Creating Interfaces</h3>
      <p>Let's create an interface for a simple user object:</p>
      <div className="codebox">
        <pre>
          <code>{`interface User {
  name: string;
  age: number;
}
`}</code>
        </pre>
      </div>
      <p>
        This interface defines that a User object must have a name property of
        type string and an age property of type number.
      </p>
      <br />
      <h3 style={{color:"lightCoral"}}>4.2.2 Using Interfaces</h3>
      <p>
        Now, you can use the User interface to ensure that objects adhere to the
        specified shape:
      </p>
      <div className="codebox">
        <pre>
          <code>{`function displayUser(user: User): void {
  console.log(\`Name: \${user.name}, Age: \${user.age}\`);
}

const newUser: User = {
  name: "Alice",
  age: 30,
};

displayUser(newUser); // Valid
`}</code>
        </pre>
      </div>
      <p>
        By using interfaces, you can enforce the structure of objects and
        prevent unintended property additions or omissions.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>4.3 Optional Properties</h2>
      <p>You can mark interface properties as optional using the ? symbol:</p>
      <div className="codebox">
        <pre>
          <code>{`interface Car {
  make: string;
  model: string;
  year?: number; // Year is optional
}
`}</code>
        </pre>
      </div>
      <p>
        With this interface, a Car object can have an optional year property.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>4.4 Function Signatures in Interfaces</h2>
      <p>
        Interfaces can describe function signatures as well. This is useful when
        specifying callback functions.
      </p>
      <div className="codebox">
        <pre>
          <code>{`interface AddFunction {
  (a: number, b: number): number;
}

const add: AddFunction = (a, b) => a + b;
`}</code>
        </pre>
      </div>
      <p>
        The AddFunction interface defines a function signature that takes two
        numbers and returns a number. <br /> This can be used to ensure that a
        callback function adheres to the specified signature. <br /> In this
        section, you've learned how to define functions with type annotations
        and create interfaces to specify object shapes. <br /> In the next
        section, we'll explore the use of classes for object-oriented
        programming in TypeScript.
      </p>
      <br />
      <hr />
      <br />
      <i style={{color:"lightCoral"}}>
        The next section will delve into "Classes and Inheritance" in
        TypeScript, covering how to define classes, implement inheritance, and
        work with access modifiers.
      </i>
    </>
  );
}
