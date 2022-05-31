import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Class component
export class Palindrome extends Component {
    render () {
        return (
            <p>{ Palindrome }</p>
        )
    }
}

// //functional component arrow
// export const Palindrome = () => {
//     return (
//         <p>{ Palindrome }</p>
//     )
// }

// //fucntional component expression
// export function Palindrome() {
//     return (
//         <p>{ Palindrome }</p>
//     )
// }

export default Palindrome

ReactDOM.render(
    <Palindrome />,
    document.getElementById('App')
)