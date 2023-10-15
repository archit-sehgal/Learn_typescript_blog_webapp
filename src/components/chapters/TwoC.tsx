import { useLocation } from "react-router-dom";
export default function TwoC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>2. {title}</h1>
      <p>
        In this section, we'll delve into the fundamental concepts of
        TypeScript. <br /> You'll learn about data types, type inference, type
        annotations, and the basic building blocks of TypeScript.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>2.1 Data Types in TypeScript</h2>
      <p>
        TypeScript introduces static typing, which means you can specify the
        data type of variables. <br /> Here are some of the basic data types in
        TypeScript:
      </p>
      <br />
      <ul style={{ marginLeft: "20px" }}>
        <li>number : Represents numeric values.</li>
        <li>string : Represents text or string values.</li>
        <li>boolean : Represents true or false values.</li>
        <li>
          array : Represents an array of values, with type annotations for array
          elements.
        </li>
        <li>
          any : Represents a dynamic type that can hold values of any data type.
        </li>
      </ul>
      <br />
      <p>Let's explore each data type with examples:</p>
      <br />
      <h3 style={{color:"lightcoral"}}>2.1.1 Number Type</h3>
      <div className="codebox">
        let age: number = 25;
        <br />
        let price: number = 9.99;
      </div>
      <h3 style={{color:"lightcoral"}}>2.1.2 String Type</h3>
      <div className="codebox">
        <pre>
          <code>
            {` let firstName: string = "John";
 let greeting: string = \`Hello, \${firstName}!\`;`}
          </code>
        </pre>
      </div>
      <h3 style={{color:"lightcoral"}}>2.1.3 Boolean Type</h3>
      <div className="codebox">
        let isReady: boolean = true; <br />
        let isDone: boolean = false;
      </div>
      <h3 style={{color:"lightcoral"}}>2.1.4 Array Type</h3>
      <div className="codebox">
        let numbers: number[] = [1, 2, 3, 4, 5];
        <br />
        let fruits: string[] = ["apple", "banana", "cherry"];
        <br />
      </div>
      <h3 style={{color:"lightcoral"}}>2.1.5 Any Type</h3>
      <div className="codebox">
        let dynamicValue: any = "This can be of any type";
        <br />
        dynamicValue = 123; // Now it's a number
      </div>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>2.2 Type Inference and Type Annotations</h2>
      <p>
        TypeScript has a feature known as "type inference." This means that
        TypeScript can often automatically determine the type of a variable
        based on the value assigned to it. However, you can also explicitly
        specify types using "type annotations."
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>2.2.1 Type Inference</h3>
      <p>
        TypeScript can often figure out the type without explicit annotations:
      </p>
      <div className="codebox">
        let message = "TypeScript is great!"; // TypeScript infers the type as
        string. <br />
        let count = 42; // TypeScript infers the type as number.
      </div>
      <h3 style={{color:"lightcoral"}}>2.2.2 Type Annotations</h3>
      <p>You can provide explicit type annotations for variables:</p>
      <div className="codebox">
        let username: string = "Alice";
        <br />
        let age: number = 30;
      </div>
      <p>
        Using type annotations is helpful for clarity and catching potential
        errors early.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>2.3 Functions in TypeScript</h2>
      <p>
        In TypeScript, functions can have type annotations for their parameters
        and return values. <br /> Here's an example:
      </p>
      <div className="codebox">
        <pre>
          <code>{`function add(a: number, b: number): number {
  return a + b;
}
`}</code>
        </pre>
      </div>
      <p>In this example:</p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          a and b are parameters with type annotations, specifying that they
          should be numbers.
        </li>
        <li>
          number after the colon specifies the return type of the function.
        </li>
      </ul>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>2.4 Type Safety and Benefits</h2>
      <br />
      <p style={{lineHeight:"2.5rem"}}>
        The main advantage of TypeScript is type safety. <br /> It helps catch
        type-related errors at compile time, reducing bugs and enhancing code
        quality. <br />Additionally, TypeScript offers excellent code editor support,
        with autocompletion, type checking, and improved tooling. <br /> By mastering
        these TypeScript basics, you'll be well-equipped to write more robust
        and maintainable code.  <br />In the next section, we'll explore advanced
        TypeScript types and features.
      </p>
      <br />
      <hr />
      <br />
      <i style={{color:"lightcoral"}}>The next section will dive into advanced TypeScript features, including interfaces, classes, generics, and more.</i>
    </>
  );
}
