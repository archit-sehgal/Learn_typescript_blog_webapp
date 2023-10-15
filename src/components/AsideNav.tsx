import { Link } from "react-router-dom";
export default function AsideNav() {
  const truncateTitle = (title: string, maxTitleLength: number) => {
    if (title.length > maxTitleLength) {
      return title.substring(0, maxTitleLength) + "...";
    } else {
      return title;
    }
  };
  const components = [
    { name: "OneC", title: "Getting Started with TypeScript" },
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

  return (
    <div className="AsideNav flex">
      <h3>Table of Content</h3>
      <div className="asideLinks flex">
        {components.map((component, index) => (
          <span className="linkContainer" key={index}>
            <Link
              to={`/${component.name}?title=${encodeURIComponent(
                component.title
              )}`}
            >
              {truncateTitle(component.title, 20)}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
