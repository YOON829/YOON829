import React, { useState} from "react";


function UseSampleApp1() {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    // const [c, setC] = useState(0);
    // const [d, setD] = useState(0);
    // const [e, setE] = useState(0);
    // const [f, setF] = useState(0);
    // const [g, setG] = useState(0);
    // const [h, setH] = useState(0);
    const [result1, setResult1] = useState<number>(0);


    // useEffect(() => {
    //     setResult1(parseInt(a, 10) + parseInt(b, 10)); // a와 b를 정수로 변환하여 결과 계산
    // }, [a, b]);

    // const handleInputAChange = (e: any) =>{
    //     setA(e.target.value);
    //     console.log("Test1");
    // };
    // const handleInputBChange = (e: any) => {
    //     setB(e.target.value);
    //     console.log("Test2");
    // };
    //
    // const handleResult1Button = (e: any) => {
    //     setResult1(parseInt(a.toString()) + parseInt(b.toString()));
    //     console.log("Test3");
    // }

    const handleInputAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10); // 입력값을 정수로 변환
        if (!isNaN(value)) { // NaN이 아닌 경우에만 상태 업데이트
            setA(value);
        }
    };

    const handleInputBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10); // 입력값을 정수로 변환
        if (!isNaN(value)) { // NaN이 아닌 경우에만 상태 업데이트
            setB(value);
        }
    };

    const handleResult1Button = () => {
        setResult1(a + b); // 버튼 클릭 시 결과 계산
    };

    return (
        <div>
            <div>
                <input type='text' onChange={handleInputAChange} value={a}/>
                <input type='text' onChange={handleInputBChange} value={b}/>
                <button onClick={handleResult1Button}>+</button>
                <span>{result1}</span>
            </div>
        </div>
    )

}

export default UseSampleApp1;