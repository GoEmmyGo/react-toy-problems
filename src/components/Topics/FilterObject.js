import React, {useState} from 'react';

//Functional component
export const FilterObject = () => {
    
    const [userInput, setUserInput] = useState("")
    const [filteredArray, setFilteredArray] = useState([])
    const [unfilteredArray, setUnfilteredArray] = useState([
        { name: "Jimmy Joe", title: "Hacker", age: 12 },
        { name: "Reagan", title: "Pop Star", hairColor: "brown" },
        { name: "Andrew", title: "Web Developer", isCool: true }
    ]) 
        
    const filter = () => {
        let result = []

        unfilteredArray.map((property) => {
            property.hasOwnProperty(userInput) && result.push(property)
        })

        setFilteredArray(result)
    }
    
    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Unfiltered Array: {JSON.stringify(unfilteredArray)}
            </span>
            <input 
                className="inputLine"
                type="text"
                onChange={(e) => setUserInput(e.target.value)}>
            </input>
            <button 
                className="confirmationButton"
                onClick={filter}>Filter
            </button>
            <span className="resultsBox filterObjectRB">Filtered: Array: {JSON.stringify(filteredArray)}
            </span>
        </div>
        
    )
    
}


// //functional component expression
// export function FilterObject() {
//     return (
//         <h1>{ FilterObject }</h1>
//     )
// }

export default FilterObject
/* eslint-disable */ 