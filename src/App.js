import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar'

class App extends Component {
  render() {
    return (
      <div className="box">
        <Calendar/>
      </div>
    );
  }
}

export default App;
