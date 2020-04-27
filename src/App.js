import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <h1>Yoo</h1>;
  }
}

export default App;
