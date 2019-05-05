import React, { Component } from 'react';
import Items from './items/Items';
import './Todos.css';

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: 1, key: Date.now(), content: 'Content 01', checked: false },
                { id: 2, key: Date.now()+1, content: 'Content 02', checked: true },
                { id: 3, key: Date.now()+2, content: 'Content 03', checked: false }
            ]
        }

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleToggleItem = this.handleToggleItem.bind(this);
    }

    handleAddItem(e) {
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
    }

    handleDeleteItem(key) {
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    handleToggleItem(key) {
        let items = this.state.items;

        items.forEach((item) => {
            if(item.key === key) {
                item.checked = !item.checked;
            }
        });
        this.setState({
            items
        });
    }
    render() {
        return (
            <div className="todos">
                <div className="todos__list">
                    <Items entries={ this.state.items } 
                        delete={ this.handleDeleteItem }
                        toggle={ this.handleToggleItem }
                    />
                </div>

                <div className="todos__footer">
                    <form className="footer__form" onSubmit={this.handleAddItem}>
                        <div className="form__input">
                            <input ref={(a) => this._inputElement = a} placeholder="enter task" />
                        </div>
                        <div className="form__button">
                            <button type="submit" className="btn">Add</button>
                        </div>
                    </form>
                </div>
         
            </div>
        )
    };
}

export default Todos; 
