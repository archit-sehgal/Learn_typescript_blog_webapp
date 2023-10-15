import { useLocation } from "react-router-dom";
export default function SevenC(){
    const location = useLocation();
    const title = new URLSearchParams(location.search).get("title");
    return (
        <>
        <h1>7.{title}</h1>
        </> 
    )
}