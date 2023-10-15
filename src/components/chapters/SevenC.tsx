import { useLocation } from "react-router-dom";
export default function SevenC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>7. {title}</h1>
      <p>
        In this section, we'll explore how to organize your TypeScript code into
        separate modules and namespaces, which help with better code
        organization and encapsulation.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>7.1 Modules in TypeScript</h2>
      <p>
        Modules are a way to organize and encapsulate related code in separate
        files. They promote code reusability and maintainability.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>7.1.1 Creating Modules</h3>
      <p>
        You can create a module by defining a separate TypeScript file with the
        export keyword to expose specific functions, classes, or variables.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>math.ts (Module)</h3>
      <div className="codebox">
        <pre>
          <code>{`export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}
`}</code>
        </pre>
      </div>
      <p>
        In this example, we've created a module named math that exports the add
        and subtract functions.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>7.1.2 Importing Modules</h3>
      <p>
        To use functions from a module, you can import them into another
        TypeScript file.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>app.ts (Main File)</h3>
      <div className="codebox">
        <pre>
          <code>{`import { add, subtract } from './math';

const result1 = add(10, 5);
const result2 = subtract(10, 5);

console.log(result1); // Output: 15
console.log(result2); // Output: 5
`}</code>
        </pre>
      </div>
      <p>
        Here, we import the add and subtract functions from the math module and
        use them in the app.ts file.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>7.2 Namespaces in TypeScript</h2>
      <p>
        Namespaces provide a way to organize code within a single global scope.
        They are typically used for grouping related functionality.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>7.2.1 Creating Namespaces</h3>
      <p>To create a namespace, you use the namespace keyword.</p>
      <div className="codebox">
        <pre>
          <code>{`namespace MyNamespace {
  export function greet(name: string): string {
    return \`Hello, \${name}!\`;
  }
}

const message = MyNamespace.greet("Alice");
console.log(message); // Output: Hello, Alice!
`}</code>
        </pre>
      </div>
      <p>
        Here, we've defined a namespace MyNamespace that contains a greet
        function.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>7.2.2 Nested Namespaces</h3>
      <p>
        You can also nest namespaces within other namespaces for further
        organization.
      </p>
      <div className="codebox">
        <pre>
          <code>{`namespace OuterNamespace {
  export namespace InnerNamespace {
    export function sayHello(): string {
      return "Hello from InnerNamespace!";
    }
  }
}

const greeting = OuterNamespace.InnerNamespace.sayHello();
console.log(greeting); // Output: Hello from InnerNamespace!
`}</code>
        </pre>
      </div>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>7.3 Module vs. Namespace</h2>
      <br />
      <p>
        Modules are used to organize code across different files, making them
        suitable for large-scale applications.
      </p>
      <p>
        Namespaces are used to organize code within a single file or to create
        nested namespaces, making them useful for smaller-scale encapsulation.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>7.4 Default Exports</h2>
      <p>You can export a single "default" item from a module or namespace.</p>
      <br />
      <h3 style={{color:"lightcoral"}}>math.ts (Module with Default Export)</h3>
      <div className="codebox">
        <pre>
          <code>{`export default function multiply(a: number, b: number): number {
  return a * b;
}
`}</code>
        </pre>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>app.ts (Importing Default Export)</h3>
      <div className="codebox">
        <pre>
          <code>{`import multiply from './math';

const result = multiply(10, 5);
console.log(result); // Output: 50
`}</code>
        </pre>
      </div>
      <p>
        In this example, the multiply function is exported as the default export
        from the math module and is imported without curly braces. <br />
        By mastering modules and namespaces, you can better structure your
        TypeScript code for improved organization and maintainability. <br /> In
        the next section, we'll explore more advanced topics, including
        decorators and mixins in TypeScript.
      </p>
      <br />
      <hr />
      <br />
      <i style={{color:"lightcoral"}}>
        The next section will delve into "Decorators and Mixins" in TypeScript,
        explaining how to use decorators for class and method metadata and how
        mixins can be employed for code reuse.
      </i>
    </>
  );
}
