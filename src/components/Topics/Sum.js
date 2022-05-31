import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//class component
export class Sum extends Component {
    render() {
        return(
            <p>{ Sum }</p>
        )
    }
}

// //functional component arrow
// export const Sum = () => {
//     return (
//         <p>{ Sum }</p>
//     )
// }

// //functional component expression
// export function Sum() {
//     return (
//         <p>{ Sum }</p>
//     )
// }

export default Sum

ReactDOM.render(
    <Sum />,
    document.getElementById('App')
)