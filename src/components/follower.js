import React, { Component } from 'react'

class Follower extends Component {
    item = this.props.item;

    render() {
        return (
            <p id={this.item.id} key={this.item.id}>
                {this.item.login}
                <a href={this.item.html_url}>Home</a>
            </p>
        )
    }
}

export {
    Follower
}