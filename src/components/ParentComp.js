import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Nipun"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Nipun'
            })
        }, 2000)
    }
    render() {
        console.log('Parent')
        return (
            <div>

                <MemoComp name={this.state.name}></MemoComp>

                {/* Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
