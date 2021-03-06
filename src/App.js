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
        const { advice } = response.data.slip; // Destructured and took advice from response.data.slip.advice

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state; //Destructured and took advice from this.state.advice
    const { fetchAdvice } = this;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
