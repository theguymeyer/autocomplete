import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AutoComp />
      </header>
    </div>
  );
}

class AutoComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {words: new Array()};
    this.inputRef = React.createRef();
  }

  handleChange(event) {
    var words = (this.inputRef.current.value).split(" ");
    var word = words[words.length - 1];

    fetch("http://localhost:3001/autocomplete/" + word)
      .then(res => res.json())
      .then(data => {
        this.setState({
          words: data
        });
      });
  }

  render() {
    return (
      <div>
        <input 
          list="suggestions"
          ref={this.inputRef}
          onChange={this.handleChange.bind(this)}
        />

        <datalist id="suggestions">
          {this.state.words.map((word, id) => 
            <option key={id} value={word} />
          )}
        </datalist>

      </div>
    )
  }
}

export default App;
