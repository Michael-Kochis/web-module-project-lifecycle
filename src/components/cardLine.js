import React, { Component } from 'react'

class CardLine extends Component {
    render() {
        return (
            <p id={this.props.name} className={this.props.name}>
                {this.props.info}
            </p>
        )
    }
}

export {
    CardLine
}