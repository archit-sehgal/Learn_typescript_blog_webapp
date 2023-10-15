import { useLocation } from "react-router-dom";
export default function EightC(){
    const location = useLocation();
    const title = new URLSearchParams(location.search).get("title");
    return (
        <>
        <h1>{title}</h1>
        </> 
    )
}