import { useState } from "react";

function Fib(){
    let [data,setData] = useState(0);
    return (
        <>
        <div>
            <h2>Fibonacci Generator</h2>
            <input 
            type="number" 
            id="num"
            placeholder="Enter a number"
            className="input"
            onChange={(e)=>{
                let x =e.target.value;
                console.log(x);
                setData(x);
            }}
            />
            <br/>
            <br/>
            <br/>
            <button
            onClick={()=>{
                console.log(data);
            }}
            >
                Get Fibonacci
            </button>
            <h3>Result:</h3>
            <div id="result">{data}</div>
            </div>
        </>
    )
}

export default Fib;