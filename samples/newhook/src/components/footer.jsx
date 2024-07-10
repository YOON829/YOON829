import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

// const Footer = ({isDark, setIsDark}) => {
//
//     const handleClick = () =>{
//         setIsDark(!isDark);
//     };
//
//
//     return (
//         <footer className="footer"
//         style={{
//             backgroundColor: isDark ? "black" : "lightgray",
//             color: isDark ? "white" : "black"
//         }}>
//
//             <button className="button" onClick={handleClick}>click me!</button>
//         </footer>
//     )
// }


//props 지움
const Footer = () => {

    const { isDark, setIsDark } =useContext(ThemeContext);
    const handleClick = () =>{
        setIsDark(!isDark);
    };


    return (
        <footer className="footer"
        style={{
            backgroundColor: isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black"
        }}>

            <button className="button" onClick={handleClick}>다크모드 ON/OFF</button>
        </footer>
    )
}

export default Footer;