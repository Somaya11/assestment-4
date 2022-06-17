import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector'
import Circles from './Components/Circles'

class App extends Component {
  state ={
    selectedButton: null,
    selectedCircle1: null,
    selectedCircle2: null,
    selectedCircle3: null,
    selectedCircle4: null,

  }


  button (selectedButton, selectedCircle1, selectedCircle3, selectedCircle4, selectedCircle2){
    if(selectedButton === selectedCircle1){
      selectedCircle1 = 'selected'
    } else if ( selectedButton === selectedCircle2){
      selectedCircle2 = 'selected'
    } else if (selectedButton === selectedCircle3){
      selectedCircle3 = 'selected'
    }else if (selectedButton === selectedCircle4){
      selectedCircle4 = 'selected'
    }
    return ' dont know'
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
       
        <CircleSelector
          selectedButton = {this.state.selectedButton}
          selectedCircle1= {this.state.selectedCircle1}
          selectedCircle2= {this.state.selectedCircle2}
          selectedCircle3= {this.state.selectedCircle3}
          selectedCircle4= {this.state.selectedCircle4}

        />

        <Circles/>


      </div>
    );
  }
}

export default App;
