import React from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd.js'
import FilterObject from '../Topics/FilterObject.js'
import FilterString from '../Topics/FilterString.js'
import Palindrome from '../Topics/Palindrome.js'
import Sum from '../Topics/Sum.js'




//functional component arrow
export const TopicBrowser = () => {
    return (
        <div>
            <p>Hello World</p> 
            <div>
                < EvenAndOdd />
                < FilterObject />
                < FilterString />
                < Palindrome />
                < Sum />
            </div>
        </div>
    )
}

// //functional component expression
// export function TopicBrowser() {
//     return (
//         <p>Hello World</p>
//     )
// }

export default TopicBrowser


