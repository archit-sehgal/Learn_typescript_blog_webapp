import { useLocation } from "react-router-dom";
export default function EightC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>8. {title}</h1>
      <p>
        In this section, we'll explore advanced TypeScript features, including
        decorators for adding metadata to classes and methods, as well as mixins
        for code reuse.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightblue" }}>8.1 Decorators in TypeScript</h2>
      <p>
        Decorators are a powerful feature in TypeScript for adding metadata and
        behavior to classes and their members. They are widely used in libraries
        and frameworks like Angular.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>8.1.1 Class Decorators</h3>
      <p>
        Class decorators are applied to classes and can be used for a variety of
        tasks, such as logging or adding functionality.
      </p>
      <div className="codebox">
        <pre>
          <code>{`function logClass(target: Function) {
  console.log(\`Class \${target.name} is being defined.\`);
}

@logClass
class ExampleClass {
  constructor() {
    console.log("ExampleClass constructor");
  }
}
`}</code>
        </pre>
      </div>
      <p>The @logClass decorator logs information when the class is defined.</p>
      <br />
      <h3 style={{ color: "lightcoral" }}>8.1.2 Method Decorators</h3>
      <p>
        Method decorators are applied to class methods and can modify their
        behavior.
      </p>
      <div className="codebox">
        <pre>
          <code>{`function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling method \${key} with arguments: \${args}\`);
    return originalMethod.apply(this, args);
  };
}

class ExampleClass {
  @logMethod
  greet(name: string) {
    return \`Hello, \${name}!\`;
  }
}

const instance = new ExampleClass();
instance.greet("Alice");
`}</code>
        </pre>
      </div>
      <p>The @logMethod decorator logs method calls and arguments.</p>
      <br />
      <br />
      <h2 style={{ color: "lightblue" }}>8.2 Mixins in TypeScript</h2>
      <p>
        Mixins are a way to combine multiple classes into a single class to
        reuse code and add behavior. They help with code modularity and
        maintainability.
      </p>
      <br />
      <h3 style={{ color: "lightcoral" }}>8.2.1 Creating a Mixin</h3>
      <p>Let's create a simple mixin for adding a "greet" method to classes:</p>
      <div className="codebox">
        <pre>
          <code>{`function GreetMixin<T extends { new (...args: any[]): {} }>(Base: T) {
  return class extends Base {
    greet(name: string) {
      return \`Hello, \${name}!\`;
    }
  };
}

class Person {
  constructor(public name: string) {}
}

const GreetablePerson = GreetMixin(Person);

const person = new GreetablePerson("Alice");
console.log(person.greet("Bob")); // Output: Hello, Bob!
`}</code>
        </pre>
      </div>
      <p>
        The GreetMixin function adds the "greet" method to the class it's
        applied to.
      </p>
      <br />
      <br />
      <h2 style={{ color: "lightblue" }}>
        8.3 Use Cases for Decorators and Mixins
      </h2>
      <p>
        Decorators: Useful for adding features like logging, authentication, or
        route handling in web frameworks. They also play a significant role in
        libraries like Angular for component metadata.
      </p>
      <p>
        Mixins: Ideal for code reuse and adding behavior to classes without
        inheritance. Mixins allow you to create composite classes.
      </p>
      <br />
      <p>
        By mastering decorators and mixins in TypeScript, you can enhance the
        modularity and functionality of your code, making it more flexible and
        maintainable. In the next section, we'll focus on tooling and
        development workflows in TypeScript.
      </p>
      <br />
      <hr />
      <br />
      <i style={{ color: "lightcoral" }}>
        The next section will cover "TypeScript Tooling and Development
        Workflow," explaining how to use the TypeScript compiler, integrate
        TypeScript with popular code editors, and set up tools like linters and
        formatters.
      </i>
      {/* social connection section */}
      <br /><br /><br />
      <p>Connect with me on:</p><br />
      <div className="socialLinks flex">
        <a href="https://twitter.com/_architsehgal_">X(formerly twitter)</a>
        <a href="https://www.instagram.com/architsehgal_/">Instagram</a>
        <a href="https://www.linkedin.com/in/archit-sehgal-78598025a/">Linkedin</a>
        <a href="https://www.facebook.com/profile.php?id=100010642232108">Facebook</a>
      </div>
    </>
  );
}
