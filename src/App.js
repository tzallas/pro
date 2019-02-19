import React, { Component } from 'react';

import './App.css';
import Group from "./Components/home/group/index";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";

class App extends Component {
  render() {
    return (
    
        <div className="App">
        <Header />
        <Group />
        <Footer />  
        </div>
  
    );
  }
}

export default App;
