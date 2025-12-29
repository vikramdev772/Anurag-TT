import React from 'react'
import { useState } from 'react'
function fib() {
  let [data, setData]=useState(0);
  return (
    <>
        <div>
            <h2>Fibonaci Generator</h2>
            <input 
            type="number" 
            id="num"
            placeholder="Enter a num"
            className="input"
            onChange={(e)=>{
                let x=e.target.value;
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
                    Get Fibonaci
                </button>
                <h3>Result:</h3>
                
        </div>
        </>
  )
}

export default fib