import React, { Component } from 'react';
import Todo from './components/todo/Todo';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Sidenav from  './components/common/sidenav/Sidenav';
import './app.css';

export default class App extends Component {
  render() {
    return (
        <div className="had-container app">
          <div className="app__header">
              <Header />
          </div>
          <div className="row">
            
            <section className="app__sidenav">
              <Sidenav />
            </section>

            <section className="app__container">
              <div className="container">
                <Todo />
              </div>

              <div className="had-container app_footer">
                <Footer />
              </div>
            </section>
              
          </div>
        </div>
    )
  }
}
