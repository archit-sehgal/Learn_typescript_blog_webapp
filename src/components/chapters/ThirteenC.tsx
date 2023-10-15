import { useLocation } from "react-router-dom";
export default function ThirteenC(){
    const location = useLocation();
    const title = new URLSearchParams(location.search).get("title");
    return (
        <>
        <h1>13. {title}</h1>
        </> 
    )
}