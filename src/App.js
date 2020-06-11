import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    advice: ''
  }

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = async () => {
    try {
      const {data: { slip: { advice } } } = await axios.get('https://api.adviceslip.com/advice');
      this.setState({ advice });
    } catch (error) {
      console.log(error);
    }

  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">
            { this.state.advice }
          </h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>Give me a new advice</span>
            </button>
        </div>
      </div>
    )
  }
}
