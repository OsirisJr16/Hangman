import React,{ useState } from 'react' ; 
import './Hangman.css' ;
import step0 from './images/0.jpg'
import step1 from './images/1.jpg'
import step2 from './images/2.jpg'
import step3 from './images/3.jpg'
import step4 from './images/4.jpg'
import step5 from './images/5.jpg'
import step6 from './images/6.jpg'

import { randomword } from './Word.js'
const Hangman = () => {
  
  const maxEssai= 6;
  const images  =[step0 , step1 ,step2 ,step3 ,step4 ,step5 , step6] ; 
  
  
  const [erreur, setErreur] = useState(0)
  const [answer , setAnswer] = useState(randomword())
  const [devine , setDevine] = useState(new Set([]))
     
  const lettreclicke = (e) =>{
    let letter = e.target.value ; 
    setDevine(devine.add(letter ))
    setErreur( erreur +( answer.includes(letter) ? 0 : 1) )

    
  } 
  
  function devineword(){
    return answer.split('').map(letter => ( devine.has(letter) ? letter : ' _ ' )) 
  }
  function generateurButtons(){
    return 'abcdefghijklmnopqrstuvxyz'.split('').map(letter =>(
        <button className='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={ lettreclicke }
        disabled={devine.has(letter)}

        >
            {letter}
        </button>
    ));
  }
  function resfresh(){
    setErreur(0) 
    setDevine(new Set([]))
    setAnswer(randomword())

  }
  const gameOver = erreur>=maxEssai ; 
  const winner = devineword().join('') === answer  ;

  let gameState = generateurButtons()

  if(winner){
    gameState ="You win"
    
    
  }
  if(gameOver) {
    gameState = "Game Over"
  }

  return (
    
    <div className='Hangman container'>
      <h1 className='text-center'>Hangman</h1>
      <div className="float-right">Wrong Guesses : { erreur } of {maxEssai}</div>
      <div className="text-center">
        <img src={images[erreur]} alt='' />
      </div>
      <div className="text-center">
        <p>Guess the programming Language:</p>
        <p>
          {!gameOver ? devineword() : answer}
        </p>
        <p>{gameState}</p>
        <button className='btn btn-info' onClick={resfresh}>Restart</button>
      </div>
    </div>
  )
  
}


export default Hangman
