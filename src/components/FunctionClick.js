// Event Handling in react

import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button Clicked")
    }
    return (
        <div>
            {/* need to write in camel case, and pass the function inside curly brackets (without parantheses) */}
            <button onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
