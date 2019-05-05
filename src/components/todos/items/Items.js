import React, { Component } from 'react'
import FlipMove from 'react-flip-move';

import './Items.css'

class Items extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  createTasks(item) {
    return ( 
      <li key={ item.key }>
        <input type="checkbox" checked={ item.checked } onChange={()=>{}} />
        <span onClick={() => this.handleToggle(item.key) }>{ item.content }</span>
        <button type="button" onClick={ () => this.handleDelete(item.key) } >X</button>
      </li>
    )
  }

  handleDelete(key) {
    this.props.delete(key);
  }

  handleToggle(key) {
    this.props.toggle(key);
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
        <ul className="list__ul">
          <FlipMove duration={250} easing="ease-out">
            { listItems }
          </FlipMove>
        </ul>
    )
  }
}

export default Items;