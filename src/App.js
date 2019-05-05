import React, { Component } from 'react';
import Todos from './components/todos/Todos';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Sidenav from './components/common/sidenav/Sidenav';
import './app.css';

class App extends Component {
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
                            <section className="container">
                                <h5>TodoList React APP</h5>
                            </section>
                        </header>

                        <section className="container">
                            <Todos />
                        </section>

                        <footer className="content__footer">
                            <Footer />
                        </footer>
                    </main>

                </div>
            </div>
        )
    }
};

export default App;
