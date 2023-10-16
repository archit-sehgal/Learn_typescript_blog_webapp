import { useLocation } from "react-router-dom";
export default function NineC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>9. {title}</h1>
      <p>
        In this section, we'll explore the tools and workflows that enhance
        TypeScript development, from setting up your development environment to
        optimizing your code for production.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.1 Setting Up a Development Environment</h2>
      <p>
        A solid development environment is essential for productive TypeScript
        coding. Here are the key components:
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>9.1.1 Code Editor</h3>
      <p>
        Choose a code editor or integrated development environment (IDE) with
        TypeScript support. Visual Studio Code (VSCode) is highly recommended
        for TypeScript development.
      </p>
      <a style={{color:"yellow"}} href="https://code.visualstudio.com/">Visual Studio Code</a>
      <br />
      <br />
      <h3 style={{color:"lightcoral"}}>9.1.2 TypeScript Installation</h3>
      <p>
        Make sure you have TypeScript installed globally. If not, you can
        install it using npm:
      </p>
      <div className="codebox">
        <code>npm install -g typescript</code>
      </div>
      <p>This will provide the tsc command for compiling TypeScript.</p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.2 TypeScript Configuration (tsconfig.json)</h2>
      <p>
        A tsconfig.json file is crucial for configuring TypeScript settings for
        your project. It defines options like target JavaScript version, module
        system, and output directory. <br /> <br /> You can generate a
        tsconfig.json file using:
      </p>
      <div className="codebox">
        <code>tsc --init</code>
      </div>
      <p>Then, customize it to fit your project requirements.</p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.3 Building and Running TypeScript Code</h2>
      <p>To build and run TypeScript code, follow these steps:</p>
      <br />
      <h3 style={{color:"lightcoral"}}>9.3.1 Compiling TypeScript</h3>
      <p>Compile your TypeScript code using the tsc command:</p>
      <div className="codebox">
        <code>tsc</code>
      </div>
      <p>
        This will generate JavaScript files in the specified output directory,
        as configured in your tsconfig.json file.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>9.3.2 Running the JavaScript Code</h3>
      <p>Use Node.js to run your compiled JavaScript files:</p>
      <div className="codebox">
        <code>node dist/main.js</code>
      </div>
      <p>Here, dist/main.js is the entry point of your application</p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.4 Integrating TypeScript with Popular Tools</h2>
      <p>
        You can integrate TypeScript with various popular tools and libraries:
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>9.4.1 Linters (ESLint, TSLint)</h3>
      <p>
        Linters help enforce coding standards and identify potential issues.
        ESLint is a widely-used linter for TypeScript.
      </p>
      <a style={{color:"yellow"}} href="https://eslint.org/">ESLint</a>
      <br />
      <br />
      <h3 style={{color:"lightcoral"}}>9.4.2 Formatters (Prettier)</h3>
      <p>
        Formatters help maintain code formatting consistency. Prettier works
        well with TypeScript.
      </p>
      <a style={{color:"yellow"}} href="https://prettier.io/">Prettier</a>
      <br />
      <br />
      <h3 style={{color:"lightcoral"}}>9.4.3 Testing Frameworks (Jest, Mocha)</h3>
      <p>
        Choose a testing framework compatible with TypeScript for writing and
        running tests.
      </p>
      <a style={{color:"yellow"}} href="https://jestjs.io/">Jest</a>
      <br />
      <a style={{color:"yellow"}} href="https://mochajs.org/">Mocha</a>
      <br />
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.5 Debugging TypeScript Code</h2>
      <p>
        VSCode provides a robust debugging environment for TypeScript. You can
        set breakpoints, inspect variables, and step through your code.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.6 Bundling and Optimization</h2>
      <p>
        For production-ready applications, consider bundling your JavaScript
        files using tools like Webpack. This optimizes your code for deployment,
        including minification and tree-shaking.
      </p>
      <a style={{color:"yellow"}} href="https://webpack.js.org/">Webpack</a>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.7 Continuous Integration and Deployment (CI/CD)</h2>
      <p>
        Use CI/CD tools to automate testing, building, and deployment processes.
        Tools like Jenkins, Travis CI, and GitHub Actions are popular choices.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>9.8 TypeScript in the Browser</h2>
      <p>
        If you want to use TypeScript in the browser, consider setting up a
        build system that compiles TypeScript to JavaScript, bundles it, and
        includes it in your HTML file.
      </p>
      <br />
      <a style={{color:"yellow"}} href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">
        Getting Started with TypeScript and Browser
      </a>
      <br />
      <br />
      <p>
        By mastering TypeScript tooling and development workflows, you'll
        streamline your development process and ensure code quality. In the
        final section, we'll provide additional resources for further learning
        and exploration.
      </p>
      <br />
      <hr />
      <br />
      <i style={{color:"lightcoral"}}>
        In the next section we will discuss testing and debugging in typescript.
      </i>
    </>
  );
}
