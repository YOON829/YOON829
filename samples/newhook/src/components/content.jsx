import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

const Content = () => {
const {isDark} = useContext(ThemeContext)

    return (
        <div className="content"
        style={{
            backgroundColor: isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black"
        }}>
            <p>쫀하루!</p>

        </div>
    )
}

export default Content;