import React from "react"
import { shuffle } from "./Shuffle"

import "../Component/style.css"
const Quiz = () =>{


    const [questions, setQuestions] = React.useState([]);
    const [totalCorrect, setTotalCorrect] = React.useState(0);
    const [totalQuestions, setTotalQuestions] = React.useState(0);
    const[selectedAnswers, setSelectedAnswers] = React.useState({})
    const[color,setColor] = React.useState({backgroundColor : ""})
       
       function toggle(){
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(res => {
            const questions = res.results.map((question, index) => {
                let answers = [question.correct_answer, ...question.incorrect_answers];
                answers = shuffle(answers);
                return {
                    id: index,
                    question: question.question,
                    correct: question.correct_answer,
                    answers
                }
            });
            setQuestions(questions);
            console.log(totalQuestions)
            setTotalQuestions(questions.length);
            setTotalCorrect(0);
            setSelectedAnswers({});
           document.querySelectorAll('input[type="radio"]').forEach(x => x.checked = false);
    
        });
    }
    
    function handleChange(id, event,key) {
        const selectedAnswer = event.target.value;
        setSelectedAnswers({...selectedAnswers, [id] : selectedAnswer })
        if(selectedAnswer === questions[id].correct){
            setTotalCorrect(totalCorrect + 1)
            setColor({[key]:{backgroundColor : "green"}})
        } else {
            setColor({[key]:{backgroundColor : "red"}})
        }
    }     
           
    return(
        <main className="quiz--main">
           {/*<div className='blob--1_div'>
                <img src = {"Images/blob 1.png"} className="blob--1" alt ={"missing"}/>
            </div>*/}
           { /*<div className='blob--2_div'>
                <img src={"Images/blob-2.png"}className="blob--2" alt={"missing"} />
            </div>*/}
           
           <div className="question_container">
         
           {questions.map(({ id, question, answers }) => {
            
           
    return (
        <form key={id}>
            <div className="question_div">
                <div className="question_heading">
                    <b>{question}</b>
                </div>
                <br />
                <div className="questions_answer">
            
                    <div key = {answers[0]} className="answer_div" style = {color}>
                        <input type="radio" name={id} value={answers[0]} onChange={(event) => handleChange(id, event, answers[0])} />
                        <label>a. {answers[0]}</label>
                    </div>
                    <div key = {answers[1]} className="answer_div" style = {color}>
                        <input type="radio" name={id}  value={answers[1]} onChange={(event) => handleChange(id, event, answers[1])} />
                        <label>b. {answers[1]}</label>
                    </div>
                    <div key = {answers[2]} className="answer_div" style = {color}>
                        <input type="radio" name={id}  value={answers[2]} onChange={(event) => handleChange(id, event, answers[2])} />
                        <label>c. {answers[2]}</label>
                    </div>
                    <div key = {answers[3]} className="answer_div" style = {color}>
                        <input type="radio" name={id}   value={answers[3]} onChange={(event) => handleChange(id, event,answers[3])} />
                        <label>d. {answers[3]}</label>
                    </div>
                </div>
            </div>
        </form>
    );
})}
                <div>
                    {totalCorrect}/ {totalQuestions}
                </div>
                 <div className="btn">
                    <button onClick={toggle} className="toggle-button">Generate Trivias</button>
                </div>
           
            </div>
           
         
        </main>
    )
}
export default Quiz;  
/*style={ans ? {backgroundColor: "red"} : {backgroundColor: "green"}}*/ 