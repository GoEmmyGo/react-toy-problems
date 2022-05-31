import React, { Component } from 'react'
import { EvenAndOdd } from '../Topics/EvenAndOdd.js'
import { FilterObject } from '../Topics/FilterObject.js'
import { FilterString } from '../Topics/FilterString.js'
import { Palindrome } from '../Topics/Palindrome.js'
import { Sum } from '../Topics/Sum.js'
import ReactDOM from 'react-dom'

//class component
export class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <p>Hello World</p> 
                <div>
                    <li>{ EvenAndOdd }</li>
                    <li>{ FilterObject }</li>
                    <li>{ FilterString }</li>
                    <li>{ Palindrome }</li>
                    <li>{ Sum }</li>
                </div>
            </div>
        )
    }
}

// //functional component arrow
// export const TopicBrowser = () => {
//     return (
//         <p>Hello World</p>
//     )
// }

// //functional component expression
// export function TopicBrowser() {
//     return (
//         <p>Hello World</p>
//     )
// }

export default TopicBrowser

ReactDOM.render(
    <TopicBrowser />,
    document.getElementById('App')
)
