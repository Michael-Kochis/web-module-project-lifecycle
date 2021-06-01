import React, { Component } from 'react'
import axios from 'axios'
import '../styles/card.css'
import { CardLine } from './cardLine'
import { Follower } from './follower'

class CardMain extends Component {
    login = "";

    componentDidMount() {
        this.setState({followers: []});
        axios.get('https://api.github.com/users/Michael-Kochis')
            .then(resp => {
                this.setState({cardData: resp.data});
            }).catch(e => alert(e));
        axios.get('https://api.github.com/users/Michael-Kochis/followers')
        .then(resp => {
            resp.data.forEach(item => {
                this.setState({followers: [...this.state.followers, item]})
            });
        }).catch(e => alert(e));
    }

    componentDidUpdate() {
        console.log(this.state);
        console.log(this.state.followers);
    }

    render() {
        return (
            <div id="cardMain" className="card-main">
                <div id="cardInfo" className="card-info title-bar" >
                    {this.state && this.state.cardData && <img src={this.state.cardData.avatar_url}
                        alt="Avatar" />}
                    <div id="cardText" className="card-text">
                        {this.state && this.state.cardData && this.state.cardData?<h3 id="login" className="login">{this.state.cardData.login}</h3>: "Cards Go Here"} 
                        {this.state && this.state.cardData && this.state.cardData.name?<CardLine name="name" info={this.state.cardData.name}/>: ""} 
                        {this.state && this.state.cardData && this.state.cardData.location?<CardLine name="location" info={this.state.cardData.location} />: <p>Location: Unknown</p>} 
                        {this.state && this.state.cardData && this.state.cardData.html_url? <a href={this.state.cardData.html_url} >My Github</a>: ""}
                        {this.state && this.state.cardData && this.state.cardData.repos_url? <a href={this.state.cardData.repos_url} >Code Repositories</a>: ""}
                        {this.state && this.state.cardData && this.state.cardData.followers_url? <a href={this.state.cardData.followers_url} >Followers</a>: ""}
                        {this.state && this.state.followers && this.state.followers.map(item => {return <Follower item={item} />})}
                        {this.state && this.state.cardData && <p>{this.state.cardData.bio}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export {
    CardMain
}