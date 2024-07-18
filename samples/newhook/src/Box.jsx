
import React, { useEffect, useState } from "react";

const Box = ({ createBoxStyle }) => {

    const [style, setStyle] = useState();

    useEffect(() => {
        console.log("박스키우기");
        setStyle(createBoxStyle());
    }, [createBoxStyle]);
    // createBoxstyle이 바뀔때마다 바뀌는거임


    return <div style={style}></div>
}


export default Box;