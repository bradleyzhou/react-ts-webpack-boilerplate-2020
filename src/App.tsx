import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { Routes } from './routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }
}

const Connected = connect()(App);
export { Connected as App };
