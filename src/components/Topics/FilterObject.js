import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//class component
export class FilterObject extends Component {
    render() {
        return (
            <p>{ FilterObject }</p>
        )
    }
}

// //functional component arrow
// export const FilterObject = () => {
//     return (
//         <h1>{ FilterObject }</h1>
//     )
// }

// //functional component expression
// export function FilterObject() {
//     return (
//         <h1>{ FilterObject }</h1>
//     )
// }

export default FilterObject

ReactDOM.render(
     <FilterObject />,
    document.getElementById('App')
)