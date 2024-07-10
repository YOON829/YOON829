import React, { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";


// Props 안 지운 상태
// const Header = ({isDark}) => {
//     return (
//         <header className="header"
//         style={{
//             backgroundColor: isDark ? "black" : "lightgray",
//             color: isDark ? "white" : "black"
//         }}>
//             <h1>Welcome!!</h1>
//
//         </header>
//     )
// }


//props 지움
const Header = () => {
    const { isDark } =useContext(ThemeContext);
    const user =useContext(UserContext);


     return (
        <header className="header"
        style={{
            backgroundColor: isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black"
        }}>
            <h1>Welcome!!{user}</h1>

        </header>
    )
}


export default Header;