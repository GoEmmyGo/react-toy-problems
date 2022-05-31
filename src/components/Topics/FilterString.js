import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//class component
export class FilterString extends Component {
    render() {
        return (
            <p>{ FilterString }</p>
        )
    }
}

// //functional component arrow
// export const FilterString = () => {
//     return (
//         <h1>{ FilterString }</h1>
//     )
// }

// //functional component expression
// export function FilterString() {
//     return (
//         <h1>{ FilterString }</h1>
//     )
// }

export default FilterString

ReactDOM.render(
    <FilterString />,
    document.getElementById('App')
)