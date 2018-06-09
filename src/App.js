import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid_view';
import ActivityGrid from './components/activity_grid';
import MeetingBar from './components/meeting_bar';
class App extends Component {
  render() {
    return (
      <div className="box">
        <MeetingBar/>
        <Grid />
        <ActivityGrid/>
      </div>
    );
  }
}

export default App;
