import React, {Component} from 'react';
import Mapbox from './mapbox';
import Btn24Hours from './Btn24hours'
import Btn4Days from './Btn4Days'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      button24: false,
      button4: false
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  
  handleClick1() {
    this.setState(prevState => {
      return {
        button24: !prevState.button24,
        button4: false
      }
    })
  }

  handleClick2() {
    this.setState(prevState => {
      return {
        button4: !prevState.button4,
        button24: false
      }
    })
  }

  render() {
    return(
      <div>
        <div className="navbar">
          <div className="button_container">
              <button className="button" onClick={this.handleClick1}>24 hours</button>
              <button className="button" onClick={this.handleClick2}>4 days</button>
          </div>
          {console.log(this.state.button24)}
          {this.state.button24 ? <Btn24Hours/>: null}
          {this.state.button4 ? <Btn4Days/>: null}
        </div>
        <Mapbox></Mapbox>

      </div>
    )
  }
};

export default App;