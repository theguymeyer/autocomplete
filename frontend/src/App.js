import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AutoComp />
      </header>
    </div>
  );
}

class AutoComp extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleChange(event) {
    var words = (this.inputRef.current.value).split(" ");
    var word = words[words.length - 1];

    fetch("http://localhost:3001/autocomplete/" + word)
      .then(
        (res) => {
          console.log(res);
        }
      )
  }

  render() {
    return (
      <div>
        <input 
          ref={this.inputRef}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default App;
