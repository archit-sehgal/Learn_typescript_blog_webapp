import { useLocation } from "react-router-dom";
export default function TenC(){
    const location = useLocation();
    const title = new URLSearchParams(location.search).get("title");
    return (
        <>
        <h1>10. {title}</h1>
        </> 
    )
}