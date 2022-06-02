//functional component arrow
import React, {useState} from 'react'


export const EvenAndOdd = () => {

    const [evenArray, setEvenArray] = useState([])
    const [oddArray, setOddArray] = useState([])
    const [userInput, setUserInput] = useState("")

    const solveProblem = () => {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
    
        for (let num of arr) {
            num % 2 === 0 ?
            evens.push(+num) :
            odds.push(+num) 
          }
          setEvenArray(evens)
          setOddArray(odds)    
    }

    return (
        <div className='puzzleBox EvenAndOddPB'>
            <h4>Even and Odd</h4>
            <input 
                className='inputLine' 
                onChange={ (e) => setUserInput(e.target.value) }>
            </input>
            <button 
                className='confirmationButton'
                onClick={solveProblem}>Solve It!
            </button>
            <span className='resultsBox'>Evens: {JSON.stringify(evenArray)}</span>
            <span className='resultsBox'>Odds: {JSON.stringify(oddArray)}</span>               
        </div>
    )
}

// //functional component expression
// export function EvenAndOdd() {
//     return (
//         <h1>{ EvenAndOdd }</h1>
//     )
// }

export default EvenAndOdd
