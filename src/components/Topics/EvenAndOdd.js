import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//class component
export class EvenAndOdd extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.solveProblem = this.solveProblem.bind(this)
    }

    solveProblem() {
        const split = this.userInput = this.userInput % 2 === 0 ? this.evenArray.push() : this.oddArray.push()
        this.setState({ evenArray: split})
        this.setState({ oddArray: split })
    }

    render() {
        return (
            <div className='puzzleBox EvenAndOddPB'>
                <h4>{ EvenAndOdd }</h4>
                <input 
                    className='inputLine' 
                    onChange={this.state.userinput}>
                </input>
                <button 
                    className='confirmationButton'
                    onClick={this.solveProblem}>
                </button>
                <span className='resultsBox'>{ this.evenArray }</span>
                <span className='resultsBox'>{ this.oddArray }</span>               
            </div>
        )
    }
}

// //functional component arrow
// export const EvenAndOdd = () => {
//     return (
//         <h1>{ EvenAndOdd }</h1>
//     )
// }

// //functional component expression
// export function EvenAndOdd() {
//     return (
//         <h1>{ EvenAndOdd }</h1>
//     )
// }

export default EvenAndOdd

ReactDOM.render(
    <EvenAndOdd />,
    document.getElementById('App')
)