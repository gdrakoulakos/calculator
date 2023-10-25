import React, { useState } from "react";

function App () {
    const [num1, setNum1] = useState ([]);
    const [num2, setNum2] = useState ([]);
    const [symbol, setSymbol] = useState (null);
    const [finalResult, setFinalResult] = useState (null);
    
    const combinedTotalNum1 = parseInt(num1.join(''));
    const combinedTotalNum2 = parseInt(num2.join(''));

    console.log("finalResult",finalResult);
      
    function handleNum (event) {
        if (symbol === null) {
        const clickedNum1=event.target.value;
        setNum1((prevNum) => [...prevNum, clickedNum1])
        }
        else {
        const clickedNum2=event.target.value;
        setNum2((prevNum) => [...prevNum, clickedNum2])
        }
    }
    
    function handleSymbol (event) {
        const clickedSymbol=event.target.value
        setSymbol(clickedSymbol)
    }

    function handleFinalResult () {
        if (symbol === "+") {
            setFinalResult(combinedTotalNum1 + combinedTotalNum2)        
        }
        else if (symbol === "-") {
            setFinalResult(combinedTotalNum1 - combinedTotalNum2)
        }
        else if (symbol === "/") {
            setFinalResult(combinedTotalNum1 / combinedTotalNum2) 
        }
        else {
            setFinalResult(combinedTotalNum1 * combinedTotalNum2)
        }
    }

    function handleErase () {
        setNum1([])
        setNum2([])
        setSymbol(null)
        setFinalResult(null)
    }

    return (
        <div className="calc-body">
            <div id="screen">
                <p id="first-num">{num1}</p>
                <p id="calc-symbol">{symbol}</p>
                <p id="second-num">{num2}</p>
                <p id="result">{finalResult}</p>
                <button id="delete" value={null} onClick={handleErase}>C</button>
                <button id="division" value={"/"} onClick={handleSymbol}>/</button>
                <button value={7} onClick={handleNum}>7</button>
                <button value={8} onClick={handleNum}>8</button>
                <button value={9} onClick={handleNum}>9</button>
                <button id="multiplication" value={"x"} onClick={handleSymbol}>x</button>                
                <button value={4} onClick={handleNum}>4</button>
                <button value={5} onClick={handleNum}>5</button>
                <button value={6} onClick={handleNum}>6</button>
                <button id="subtraction" value={"-"} onClick={handleSymbol}>-</button>                
                <button value={1} onClick={handleNum}>1</button>
                <button value={2} onClick={handleNum}>2</button>
                <button value={3} onClick={handleNum}>3</button>
                <button id="addition" value={"+"} onClick={handleSymbol}>+</button>
                <button id="zero" value={0} onClick={handleNum}>0</button>
                <button id="equal" value={"="} onClick={handleFinalResult}>=</button>
            </div>
        </div>
    )
}

export default App;