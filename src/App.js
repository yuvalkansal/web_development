import React from 'react';
import logo from './logo.svg';
import './App.css';
import { whileStatement } from '@babel/types';

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this);
    this.display = this.display.bind(this);
    this.state = {value: ''}
  }
  display(){
    return alert(`The value ${this.state.value} has been pressed`)
  }
  handleInput(e){
    this.setState({value: e.target.value})
  }
  render()
  {
  return (
    <div>
      <div className = "test">
      <a 
      href = "https://gmail.com"
      style = {{paddingLeft: 13,textDecoration: 'none'}}
      >
        Gmail
      </a>
      <a
      href = "https://www.google.com/imghp?hl=en"
      style = {{paddingLeft: 13,textDecoration: 'none'}}
      >
        Images
      </a>
      
      </div>
    <div className="App">
      <header className="App-header">
        <img src={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} className="App-logo" alt="logo" />
        <form>
          <label>
            <input type = 'text' onChange = {this.handleInput} />
            </label>
            <button onClick = {this.display}>
              Submit
            </button>
          
        </form>
        <br />
        <select>
        <option> Hindi </option>
        <option> Malay </option>
        <option> Mandarin </option>
        <option selected value = 'english'> English </option>
        </select>
      </header>
    </div>
    </div>
  );
}
}


export default App;
