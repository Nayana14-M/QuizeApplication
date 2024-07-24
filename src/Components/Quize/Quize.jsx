import React from 'react'
import './Quize.css'
import { data } from '../../data'
import { useState } from 'react'


export default function Quize() {

 
   const [index,setIndex]=useState(0)
   const [q,setQ]= useState(data[index])
   const [isLastPage ,setIsLastPage]=useState(false)
  const [selectedOption, setSelectedOption]=useState(null)
  const [score, setScore] = useState(0);

   function nextQuestion(){
    if(selectedOption===q.ans){
      setScore(score+1)
    }
if( index < data.length-1){ 
    setIndex(index+1)
    setQ(data[index+1])
    setSelectedOption(null);
   }
    else{
        setIsLastPage(true);
    }
}
if(isLastPage === true){
    return( 
      < div className='last'>
     
    <h2>You are successfully completed the Quize. </h2>
    

     <h2> Your final score is {score} </h2>
    </div>
    )

}
function  handleClick(option){
setSelectedOption(option)
// if(selectedOption===q.ans){ 
// e.target.classList.add('correct')
// }
// else{
//   e.target.classList.add('incorrect')
// }
}

function clear(){
    setSelectedOption(null);
}
  return (
    <div >
        <h1 className='head'>Kod Quize</h1>
        <div className='quize'>
        <h3>{q.question}</h3>
        <ul>
           <li  onClick={()=>handleClick('option1')}  style={{backgroundColor:  selectedOption==='option1'?'#58D68D':'#D7DBDD',}} >{q.option1}</li>
           <li  onClick={()=>handleClick('option2')}  style={{backgroundColor:  selectedOption==='option2'?'#58D68D':'#D7DBDD',}}> {q.option2}</li>
           <li  onClick={()=>handleClick('option3')}  style={{backgroundColor:  selectedOption==='option3'?'#58D68D':'#D7DBDD',}}> {q.option3}</li>
           <li  onClick={()=>handleClick('option4')}  style={{backgroundColor:  selectedOption==='option4'?'#58D68D':'#D7DBDD',}}> {q.option4}</li>

            </ul>
           <button onClick={clear} className='clear'>clear response</button>
             <button onClick={nextQuestion}>NEXT</button> 
           
            <div>Question: {index+1} /{data.length}</div>
           
            
            </div>
            
    </div>
  )

}