import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: ''}
  }
  display(){
    return alert("The submit button has been pressed")
  }
  render()
  {
  return (
    <div>
      <div className = "test">
      <a 
      href = "https://gmail.com"
      
      >
        Gmail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      <a
      href = "https://www.google.com/imghp?hl=en"
      >
        Images&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      
      </div>
    <div className="App">
      <header className="App-header">
        <img src={"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} className="App-logo" alt="logo" />
        <form>
          <label>
            <input type = 'text' />
 
            <button onClick = {this.display}>
              Submit
              </button>
          </label>
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
