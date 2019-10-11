import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends React.Component{
  render() {
  return (
    <div className="App">
        {/* <p>Hi {this.props.name}</p>  */}
        <Clock />
    </div>
  );
}
}

export default App;
