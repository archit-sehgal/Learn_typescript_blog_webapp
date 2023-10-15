import { useLocation } from "react-router-dom";
export default function OneC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>1. {title}</h1>
      <p>
        TypeScript is a powerful superset of JavaScript that brings static
        typing and enhanced tooling to the JavaScript ecosystem. In this
        section, we will guide you through the initial steps to set up a
        TypeScript project and create a simple "Hello World" TypeScript
        application.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightcoral"}}>1.1 Setting Up Your Development Environment</h2>
      <p>
        Before you begin working with TypeScript, you'll need to set up your
        development environment. <br />
        <i> Here are the essential steps:</i>
      </p>
      <br />
      <h3 style={{color:"lightblue"}}>1.1.1 Node.js and npm (Node Package Manager)</h3>
      <p>
        If you don't already have Node.js and npm installed, you can download
        and install them from the official website: Node.js. <br /> These tools
        are essential for managing dependencies and running TypeScript
        applications.
        <br />
        <br />
        To verify your installation, open a terminal and run:
      </p>
      <div className="codebox">
        node -v <br /> npm -v
      </div>
      <p>
        You should see the versions of Node.js and npm displayed in the
        terminal.
      </p>
      <br />
      <br />
      <h3 style={{color:"lightblue"}}>1.1.2 Installing TypeScript</h3>
      <p>
        You can install TypeScript globally using npm by running the following
        command:
      </p>

      <div className="codebox">npm install -g typescript</div>
      <p>
        This will make the TypeScript compiler (tsc) available on your command
        line.
      </p>
      <br />
      <br />
      <h3 style={{color:"lightblue"}}>1.1.3 Code Editor</h3>
      <p>
        Choose a code editor or integrated development environment (IDE) with
        TypeScript support. <br /> Visual Studio Code (VSCode) is highly
        recommended due to its excellent TypeScript integration and extensions.
      </p>
      <a style={{ color: "yellow" }} href="https://code.visualstudio.com/">
        Visual Studio Code
      </a>
      <br />
      <br />
      <h2 style={{color:"lightcoral"}}>1.2 Creating a TypeScript Project</h2>
      <p>
        Now that your development environment is set up, let's create a simple
        TypeScript project.
      </p>
      <br />
      <h3 style={{color:"lightblue"}}>1.2.1 Project Directory</h3>
      <p>
        Start by creating a new directory for your TypeScript project. <br /> In
        your terminal, navigate to the location where you want to create your
        project and run:
      </p>
      <div className="codebox">
        mkdir my-typescript-project <br />
        cd my-typescript-project
      </div>
      <br />
      <h3 style={{color:"lightblue"}}>1.2.2 Initializing a package.json File</h3>
      <p>
        You can use npm to initialize a package.json file for managing your
        project's dependencies. <br /> Run the following command and answer the
        prompts: bash
      </p>
      <div className="codebox">npm init -y</div>
      <p>
        This will create a package.json file with default values. You can modify
        it later to include project-specific information.
      </p>
      <br />
      <h3 style={{color:"lightblue"}}>1.2.3 Creating a tsconfig.json File</h3>
      <p>
        TypeScript projects require a configuration file, tsconfig.json, to
        specify the TypeScript settings for your project. <br /> Generate a
        default tsconfig.json file by running:
      </p>
      <div className="codebox">tsc --init</div>
      <p>This will create a tsconfig.json file in your project directory.</p>
      <br />
      <h3 style={{color:"lightblue"}}>1.2.4 Writing Your First TypeScript Code</h3>
      <p>
        Create a new TypeScript file, app.ts, in your project directory and add
        the following code:
      </p>
      <div className="codebox">
        <pre>
          <code>
            {`
function sayHello(name: string) {
  console.log(\`Hello, \${name}!\`);
}

sayHello("TypeScript");
      `}
          </code>
        </pre>
      </div>
      <p>
        This simple TypeScript code defines a function sayHello that takes a
        name parameter of type string and logs a greeting message.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightcoral"}}>1.3 Compiling and Running TypeScript</h2>
      <p>
        With your TypeScript code in place, it's time to compile and run it.
      </p>
      <br />
      <h3 style={{color:"lightblue"}}>1.3.1 Compiling TypeScript</h3>
      <p>
        Compile the TypeScript code to JavaScript by running the following
        command in your project directory:
      </p>
      <div className="codebox">tsc</div>
      <p>
        This will generate a JavaScript file named app.js in the same directory.
      </p>
      <br />
      <h3 style={{color:"lightblue"}}>1.3.2 Running the JavaScript Code</h3>
      <p>
        Now, you can run the JavaScript code using Node.js. In your terminal,
        execute the following command:
      </p>
      <div className="codebox">node app.js</div>
      <p>You should see the output:</p>
      <div className="codebox">Hello, TypeScript!</div>
      <p>
        Congratulations! You've successfully set up a TypeScript project,
        written TypeScript code, compiled it to JavaScript, and executed it.
      </p>
      <br />
      <hr /><br />
      <i style={{color:"lightcoral"}}>
        In the next section, we will delve into the basics of TypeScript,
        including data types, type inference, and type annotations.
      </i>
    </>
  );
}
