import { useLocation } from "react-router-dom";
export default function TenC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>10. {title}</h1>
      <p>
        Testing and debugging are crucial aspects of software development. In
        this section, we'll explore how to test and debug TypeScript code
        effectively.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightBlue"}}>10.1 Testing TypeScript Code</h2>
      <p>
        Testing is essential to ensure the reliability and correctness of your
        TypeScript applications. There are several testing frameworks and
        libraries available for TypeScript:
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>10.1.1 Jest</h3>
      <p>
        <a style={{color:"yellow"}} href="https://jestjs.io/">Jest</a> is a popular JavaScript testing
        framework with excellent TypeScript support. It's known for its
        simplicity and powerful features, including test runners, assertions,
        and mocking.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>Installation:</h3>
      <div className="codebox">
        <code>npm install --save-dev jest @types/jest</code>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>Writing Tests:</h3>
      <p>
        Create test files with names like *.test.ts or *.spec.ts and use Jest's
        testing functions:
      </p>
      <div className="codebox">
        <pre>
          <code>{`// sum.ts
export function sum(a: number, b: number): number {
  return a + b;
}

// sum.test.ts
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
`}</code>
        </pre>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>Running Tests:</h3>
      <p>Execute tests with the jest command:</p>
      <div className="codebox">
        <code>npx jest</code>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>10.1.2 Mocha and Chai</h3>
      <p>
        <a style={{color:"yellow"}} href="https://mochajs.org/">Mocha </a>is a flexible test framework
        that works well with TypeScript.{" "}
        <a style={{color:"yellow"}} href="https://www.chaijs.com/">Chai </a>
        is an assertion library often used in conjunction with Mocha.
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>Installation:</h3>
      <div className="codebox">
        <code>npm install --save-dev mocha chai @types/mocha @types/chai</code>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>Writing Tests:</h3>
      <p>
        Create test files and use Mocha's describe and it functions along with
        Chai assertions:
      </p>
      <div className="codebox">
        <pre>
          <code>{`// sum.ts
export function sum(a: number, b: number): number {
  return a + b;
}

// sum.test.ts
import { sum } from './sum';
import { expect } from 'chai';

describe('sum', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
`}</code>
        </pre>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>Running Tests:</h3>
      <p>Run tests with the mocha command:</p>
      <div className="codebox">
        <code>npx mocha</code>
      </div>
      <br />
      <br />
      <h2 style={{color:"lightBlue"}}>10.2 Debugging TypeScript Code</h2>
      <p>
        Debugging is essential for finding and fixing issues in your TypeScript
        applications. Here are some tips for effective debugging:
      </p>
      <br />
      <h3 style={{color:"lightcoral"}}>10.2.1 Debugging in VSCode</h3>
      <p>
        Visual Studio Code (VSCode) offers powerful debugging capabilities for
        TypeScript. To use the VSCode debugger:
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          Set breakpoints in your TypeScript code by clicking in the left margin
          or pressing F9.
        </li>
        <li>
          Launch your program in debugging mode by pressing F5 or clicking the
          green "Start Debugging" button.
        </li>
        <li>
          Use the debugging toolbar to step through your code, inspect
          variables, and evaluate expressions.
        </li>
        <li>Debugging output is displayed in the Debug Console.</li>
      </ul>
      <br />
      <h3 style={{color:"lightcoral"}}>10.2.2 Logging and Console Debugging</h3>
      <p>
        Adding console.log statements to your TypeScript code is a quick way to
        inspect values and troubleshoot issues. Use console.log to print
        variable values and messages to the console:
      </p>
      <div className="codebox">
        <code>console.log('Value of x:', x);</code>
      </div>
      <br />
      <h3 style={{color:"lightcoral"}}>10.2.3 Browser DevTools</h3>
      <p>
        When working on TypeScript code that runs in the browser, use browser
        Developer Tools (e.g., Chrome DevTools) to set breakpoints, inspect
        variables, and debug your code.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightBlue"}}>10.3 Continuous Integration and Continuous Deployment (CI/CD)</h2>
      <p>
        Incorporate CI/CD pipelines into your development workflow. CI tools
        like Jenkins, Travis CI, and GitHub Actions can automatically run your
        tests and build your TypeScript code whenever changes are pushed to your
        repository.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightBlue"}}>10.4 Code Coverage</h2>
      <p>
        Consider using code coverage tools to measure how much of your
        TypeScript code is covered by tests. Tools like Istanbul can help you
        identify areas of your code that require more test coverage.
      </p>
      <br />
      <a style={{color:"yellow"}} href="https://istanbul.js.org/">Istanbul</a>
      <br />
      <br />
      <p>
        Testing and debugging are essential skills for a successful TypeScript
        developer. Effective testing ensures your code functions as expected,
        while debugging helps you pinpoint and resolve issues when they arise.
        Whether you choose Jest, Mocha, or another testing framework, mastering
        these skills is crucial for delivering high-quality TypeScript
        applications.
      </p>
      <br />
      <hr />
      <br />
      <i style={{color:"lightcoral"}}>
        The next section will explore some "Real-World Applications" of
        TypeScript
      </i>
    </>
  );
}
