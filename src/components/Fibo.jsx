import React,{useState}from 'react';
import "../styles/Fib.css"

function Fib() {
    let[data,setData]=useState("0");
  return (
    <>
    <div>
        <h2>Fibonnaci Generator</h2>
        <input
        type="number"
        placeholder="Enter a number"
        className="input"
        onChange={(e)=>{
            let x=e.target.value;
            console.log(x);
            setData(x);
        }}
    />
    <br />
    <br />
    <button
        onClick={()=>{
            console.log(data);
        }}
    >
        Get Fibonnaci
    </button>
    <h3>Result: </h3>
    <div id ="result">{data}</div>
    </div>
    </>
  )
}

export default Fib