import React, { Component } from 'react';
import './App.css';
import MeetingBar from './components/meeting_bar';
import Table from './components/table'

class App extends Component {
  render() {
    return (
      <div className="box">
        <MeetingBar/>
        <Table/>
      </div>
    );
  }
}

export default App;
