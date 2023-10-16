import { useLocation } from "react-router-dom";
export default function ThirteenC() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  return (
    <>
      <h1>{title}</h1>
      <br />
      <p>
        In addition to the content covered in this blog, there are many more
        valuable resources available to help you learn, explore, and master
        TypeScript. These resources contains documentation, tutorials, courses,
        and communities that can provide you with the knowledge and support you
        need for your TypeScript journey.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>1. Official TypeScript Documentation</h2>
      <br />
      <p>
        The official TypeScript documentation is your primary source for
        in-depth information about TypeScript features, configurations, and best
        practices. It's regularly updated and provides comprehensive coverage of
        the language.
      </p>
      <a style={{color:"yellow"}} href="https://www.typescriptlang.org/docs/">
        Official TypeScript Documentation
      </a>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>2. TypeScript Playground</h2>
      <br />
      <p>
        The TypeScript Playground is an interactive online tool that allows you
        to experiment with TypeScript code and see how it compiles to JavaScript
        in real-time. It's a great way to learn and try out TypeScript concepts
        without the need for a development environment.
      </p>
      <a style={{color:"yellow"}} href="https://www.typescriptlang.org/play">TypeScript Playground</a>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>3. Advanced TypeScript Learning</h2>
      <br />
      <p>
        To deepen your understanding of TypeScript, explore the following
        advanced resources:
      </p>
      <br />
      <p>
        <a style={{color:"yellow"}} href="https://github.com/basarat/typescript-book">
          Advanced TypeScript GitHub Repository
        </a>
        : An open-source book covering advanced TypeScript topics, maintained on
        GitHub.
      </p>
      <br />
      <p>
        <a style={{color:"yellow"}} href="https://www.typescriptlang.org/docs/handbook/">
          TypeScript Handbook
        </a>
        : The official TypeScript Handbook provides detailed information on
        various TypeScript features and advanced topics.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>4. TypeScript Style Guides</h2>
      <br />
      <p>
        Adopting a consistent coding style and following best practices is
        essential. Here are some popular TypeScript style guides:
      </p>
      <br />
      <p>
        <a style={{color:"yellow"}} href="https://basarat.gitbook.io/typescript/styleguide">
          TypeScript Deep Dive
        </a>
        : Style Guide: A TypeScript style guide that covers best practices for
        writing clean and maintainable code. <br />
        <br />
        <a style={{color:"yellow"}} href="https://github.com/airbnb">Airbnb TypeScript Style Guide</a>:
        Airbnb's TypeScript style guide for consistent code formatting and
        organization.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>5. TypeScript Video Tutorials and Courses</h2>
      <br />
      <p>
        Video tutorials and online courses are an excellent way to learn
        TypeScript effectively. Consider the following resources:
      </p>
      <br />
      <p>
        <a style={{color:"yellow"}} href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">
          TypeScript for JavaScript Programmers
        </a>
        : An official TypeScript video series for JavaScript programmers. <br />
        <br />
        <a style={{color:"yellow"}} href="https://www.udemy.com/course/typescript-the-complete-developers-guide/">
          TypeScript: The Complete Developer's Guide (Udemy)
        </a>
        : A popular course that covers TypeScript comprehensively.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>6. TypeScript Community and Forums</h2>
      <br />
      <p>
        Engaging with the TypeScript community can be incredibly helpful. Here
        are two platforms where you can ask questions, share your knowledge, and
        connect with other TypeScript developers:
      </p>
      <br />
      <p>
        <a style={{color:"yellow"}} href="https://stackoverflow.com/questions/tagged/typescript">
          Stack Overflow TypeScript Community
        </a>
        : A community-driven Q&A platform for TypeScript-related questions and
        answers. <br />
        <br />
        <a style={{color:"yellow"}} href="https://www.reddit.com/r/typescript/">
          r/typescript on Reddit
        </a>
        : The TypeScript subreddit where developers discuss TypeScript-related
        topics and share knowledge.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>7. TypeScript News and Updates</h2>
      <br />
      <p>
        Stay updated with the latest developments and announcements in the world
        of TypeScript:
      </p>
      <br />
      <p>
        <a style={{color:"yellow"}} href="https://twitter.com/typescript">TypeScript on Twitter</a>:
        Follow the official TypeScript Twitter account for announcements and
        updates. <br />
        <br />
        <a style={{color:"yellow"}} href="https://devblogs.microsoft.com/typescript/">TypeScript Blog</a>
        : The official TypeScript blog provides insights into the language's
        development and features.
      </p>
      <br />
      <br />
      <h2 style={{color:"lightblue"}}>8. TypeScript Podcasts</h2>
      <br />
      <p>
        If you prefer to learn through audio content, consider exploring
        TypeScript podcasts that feature discussions, interviews, and news
        related to TypeScript development: <br />
        <br />
        <a style={{color:"yellow"}} href="https://typescript.community/">TypeScript Podcast</a>: A
        podcast focused on TypeScript, featuring discussions, interviews, and
        news related to TypeScript development.
      </p>
      <br />
      <p>
        These additional resources will enhance your TypeScript learning
        journey, provide valuable insights, and connect you with a supportive
        community of developers. Whether you're a beginner or an experienced
        developer, TypeScript offers a powerful and versatile tool for building
        maintainable applications.
      </p>
      <br />
      <hr />
      <br />
      <i style={{color:"lightcoral"}}>Happy coding, and enjoy your TypeScript journey!</i>
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
