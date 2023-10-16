import { useLocation } from "react-router-dom";
export default function Nav() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="nav flex">
      {formattedDate}
      <div>{title}</div>
    </div>
  );
}
