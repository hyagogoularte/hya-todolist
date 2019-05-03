import React, { Component } from 'react';
import Items from './items/Items';
import './Todos.css';


class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: 1, key: Date.now(), content: 'Content 01' },
                { id: 2, key: Date.now()+1, content: 'Content 02' },
                { id: 3, key: Date.now()+2, content: 'Content 03' }
            ]
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        let value = this._inputElement.value;
        if (value === '') {
            return;
        }

        let newItem = {
            id: 0,
            content: this._inputElement.value,
            key: Date.now()
        }

        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            };
        });

        this._inputElement.value = '';
        console.log(this.state.items);
    }

    render() {
        return (
            <div className="todos card">
                <div className="todos__list">
                    <Items entries={ this.state.items } />
                </div>

                <div className="row todos__footer">
                    <form className="col s12" onSubmit={this.addItem}>
                        <div className="row input-field">
                            <div className="col s9">
                                <input ref={(a) => this._inputElement = a} placeholder="enter task" />
                            </div>
                            <div className="col s3">
                                <button type="submit" className="btn">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
         
            </div>
        )
    };
}

export default Todos; 
