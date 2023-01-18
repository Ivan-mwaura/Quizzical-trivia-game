import React from 'react'
import "../Component/style.css"
import Quiz from './Quiz'
function Start(){
    const[showQuiz,setShowQuiz] = React.useState(false)

    function onStart(){
        setShowQuiz(true)
    }
    return(
        showQuiz ? <Quiz/> : 

        <main className='start--main'>
           
            <div className='blob--1_div'>
                <img src = {"Images/blob 1.png"} className="blob--1" alt ={"missing"}/>
            </div>
            <div className='blob--2_div'>
                <img src={"Images/blob-2.png"}className="blob--2" alt={"missing"} />
            </div>
            
            <div className='start--div'>
                <div>
                    <h1 className='start--heading'>Quizzical</h1>
                </div>
                <div>
                    <div className='start--p'>A fun App to jog your mind with Triva questions</div>
                </div>
                <div className='btn'>
                    <button className='start--button' onClick = {onStart}>Start quiz</button>
                </div>
             </div>
        </main>
       
    )
}
export default Start;