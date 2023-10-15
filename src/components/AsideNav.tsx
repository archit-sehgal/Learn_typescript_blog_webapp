import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; // Import useState hook

export default function AsideNav() {
  const truncateTitle = (title:string, maxTitleLength:number) => {
    if (title.length > maxTitleLength) {
      return title.substring(0, maxTitleLength) + "...";
    } else {
      return title;
    }
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTitle = searchParams.get("title");

  const components = [ { name: "OneC", title: "Getting Started with TypeScript" },
  { name: "TwoC", title: "TypeScript Basics" },
  { name: "ThreeC", title: "Advanced Types in TypeScript" },
  { name: "FourC", title: "Functions and Interfaces" },
  { name: "FiveC", title: "Classes and Inheritance" },
  { name: "SixC", title: "Generics in TypeScript" },
  { name: "SevenC", title: "Modules and Namespaces" },
  { name: "EightC", title: "Decorators and Metadata" },
  { name: "NineC", title: "TypeScript Tooling and Development Workflow" },
  { name: "TenC", title: "Testing and Debugging in TypeScript" },
  { name: "ElevenC", title: "Real-World Applications" },
  { name: "TwelveC", title: "Conclusion" },
  { name: "ThirteenC", title: "Additional Resources" },
  ];

  const [activeLink, setActiveLink] = useState(activeTitle);

  const handleClick = (title:string) => {
    setActiveLink(title);
  };

  return (
    <div className="AsideNav flex">
      <h3>Table of Content</h3>
      <div className="asideLinks flex">
        {components.map((component, index) => (
          <span
            className={`linkContainer ${component.title === activeLink ? "active" : ""}`}
            key={index}
          >
            <Link
              to={`/${component.name}?title=${encodeURIComponent(component.title)}`}
              onClick={() => handleClick(component.title)}
            >
              {truncateTitle(component.title, 20)}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
