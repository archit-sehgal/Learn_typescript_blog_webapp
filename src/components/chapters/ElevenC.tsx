import { useLocation } from "react-router-dom";
export default function ElevenC(){
    const location = useLocation();
    const title = new URLSearchParams(location.search).get("title");
    return (
        <>
        <h1>11. {title}</h1>
        </> 
    )
}