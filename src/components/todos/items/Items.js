import React, { Component } from 'react'

class Items extends Component {
  createTasks(item) {
    return <li key={ item.key }>{ item.content }</li>
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
        <ul className="todos__list">
            { listItems }
        </ul>
    )
  }
}

export default Items;