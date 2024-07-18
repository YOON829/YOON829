import React, { useEffect, useMemo, useState} from "react";

function UseMemoApp2() {
    const  [Number, setNumber] = useState(0);
    const  [isKorea, setIsKorea] = useState(true);

    const location = useMemo(()=> {
        return {country : isKorea ? "한국" : "외국"}
    }, [isKorea])

    useEffect(() => {
        console.log("useEffect 호출")
    }, [location])

    return (
        <div>
            <h3>배고파아아아아</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />

            <h3> 어느나라에 잇서요 </h3>
            <p> Nara : </p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )

}


export default UseMemoApp2;

