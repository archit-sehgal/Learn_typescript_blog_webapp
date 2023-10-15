import { useLocation } from "react-router-dom";
export default function TwelveC(){
    const location = useLocation();
    const title = new URLSearchParams(location.search).get("title");
    return (
        <>
        <h1>12. {title}</h1>
        </> 
    )
}