import React from 'react'

//passing props to childcomponent and calling

//also figuring out how to pass parameters (here 'child') to the same

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() =>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
