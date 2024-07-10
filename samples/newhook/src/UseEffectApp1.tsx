import React, { useState, useEffect} from "react";


function UseEffectApp1() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState<string>("");

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    useEffect(() => {
    console.log("랜더링")
    }, [count]);

    useEffect(() => {
        console.log("name 랜더링")
    }, [name]);


    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);

    }

    return (
        <div>
            <button onClick={handleCountUpdate}>update</button>
            <span>count:</span>


            <input type="text" value={name} onChange={handleInputChange}></input>


        </div>
    )
}

export default UseEffectApp1;