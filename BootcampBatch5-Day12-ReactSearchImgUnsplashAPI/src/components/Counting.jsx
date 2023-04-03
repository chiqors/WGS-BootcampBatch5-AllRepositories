import React, { Component } from 'react'

export default class Counting extends Component {
    handlerClick = () => {
        this.props.parentClickLike();
    }

    render() {
        return (
            <div>
                <button onClick={this.handlerClick}>click me</button>
            </div>
        )
    }
}
