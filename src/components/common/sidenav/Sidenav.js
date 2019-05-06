import React, { Component } from 'react'
import GithubImg from '../../../images/github.png';
import LinkedInImg from '../../../images/linkedin.png';
import './sidenav.css';

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
      <section className="sidenav__container">
        <div className="sidenav__info">
            <UserInfo user={ this.state.user } />
        </div>
        <div className="sidenav__footer">
            <div className="footer__item">
                <a rel="noopener noreferrer" href="https://github.com/hyagogoularte/" target="_blank">
                    <img src={ GithubImg } alt="Github icon" />
                </a>
            </div>
            <div className="footer__item">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/hyagogoularte/" target="_blank">
                    <img src={ LinkedInImg } alt="Github icon" />
                </a>
            </div>
        </div>
      </section>

    )
  }
}

const UserInfo = ({user}) => {
    return (
        <div className="sidenav__user-info">
           <Avatar user={user} />
            <h4>{user.name}</h4>
            <h5>{user.description}</h5>
        </div>
    );
}


const Avatar = ({user}) => {
    return (
        <div className="user-info__avatar">
            <img src={user.image} alt={user.name} />
        </div>
    );
}