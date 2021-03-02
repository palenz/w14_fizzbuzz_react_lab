import React, { useState, useEffect } from "react";

const FizzBuzz = () => {
    
    const [counter, setCounter] = useState(1);
    const [output, setOutput] = useState(1);
    const [playerAge, setPlayerAge] = useState(0);
    const [answer, setAnswer]  = useState("")
    const [sumbittedAnswer, setSubmittedAnswer] = useState("");
    
    useEffect(() => {
        setSubmittedAnswer(answer);
        if (counter % 3 == 0 && counter % 5 == 0){
            setOutput(`FizzBuzz ${counter}`)
        } else if (counter % 3 ==0){
            setOutput(`Fizz ${counter}`)
        } else if (counter % 5 == 0){
            setOutput(`Buzz ${counter}`)
        } else if (counter == playerAge){
            setOutput("This is your age! You're old")
        } else {
            setOutput(counter)
        };
    }, [counter])

    const handleIncrement = () => {
        setCounter(counter+1);
        
    }
    
    const handleAgeChange = (event) =>{
        setPlayerAge(event.target.value)
    }
    const changeAnswer = (event) => {
        setAnswer(event.target.value)
    }
    
    return (
        <>
        <h1>FizzBuzz</h1>
        <h2>{output}</h2>
        <button onClick={handleIncrement}>Next Turn</button>
        <h3>Take a Guess</h3>
        <input type="text" value={answer} onChange={changeAnswer}></input>
        
        </>
        
        

    );
}

export default FizzBuzz