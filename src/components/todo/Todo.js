import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
        <div className="todolist">
            <div className="todolist__header">
                <form>
                    <input placeholder="enter task"/>
                    <buttton type="submit">add</buttton>
                </form>
            </div>
        </div>
    )
  };
}

export default Todo;
