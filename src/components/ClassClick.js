import React, { Component } from 'react'

class ClassClick extends Component {

    ClickHandler() {
        console.log("Clicked the Handler")
    }

    render() {
        return (
            <div>
                {/* Notice the usage of "this" */}
                <button onClick = {this.ClickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
