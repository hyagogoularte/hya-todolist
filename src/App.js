import React, { Component } from 'react';
import TodoList from './components/todos/Todos';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Sidenav from './components/common/sidenav/Sidenav';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className="app__container">

                <header className="container__header">
                    <Header />
                </header>

                <div className="container__main">

                    <section className="main__sidenav">
                        <Sidenav />
                    </section>

                    <main className="main__content">
                        <header className="content__header">
                            <h5>TodoList React APP</h5>
                        </header>

                        <section className="container">
                            <TodoList />
                        </section>

                        <footer className="content__footer">
                            <Footer />
                        </footer>

                    </main>

                </div>
            </div>
        )
    }
}
