import React, { Component } from 'react'

export default class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: 'Hyago Goularte',
                description: 'Full Stack Developer',
                image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
            }
        }
    }

  render() {
    return (
      <div className="sidenav__container">
        <UserInfo user={ this.state.user } />
        sidenav
      </div>
    )
  }
}

function UserInfo(props) {
    return (
        <div className="sidenav__user-info">
           <Avatar user={props.user} />
            <h4>{props.user.name}</h4>
            <h5>{props.user.description}</h5>
        </div>
    );
}


function Avatar(props) {
    return (
        <div className="user-info__avatar">
            <img src={props.user.image} alt={props.user.name} />
        </div>
    );
}