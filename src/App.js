import React, { Component } from 'react';
import TodoList from './components/todos/Todos';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Sidenav from  './components/common/sidenav/Sidenav';
import './app.css';

export default class App extends Component {
  render() {
    return (
        <div className="had-container app">
          <header className="app__header">
              <Header />
          </header>
          <div className="row">
            
            <section className="col app__sidenav">
              <Sidenav />
            </section>

            <section className="app__container">
              <main className="container">
                <TodoList />
              </main>

              <footer className="had-container app_footer">
                <Footer />
              </footer>
            </section>
              
          </div>
        </div>
    )
  }
}
