import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AutoComp />
      </header>
    </div>
  );
}

class AutoComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      words: [],
      errorMsg: ""
    };
    this.inputRef = React.createRef();
    // this.errorText = React.createRef();
  }

  handleChange(event) {
    let words = (this.inputRef.current.value).split(" ");
    let word = words[words.length - 1];

    fetch("http://localhost:3001/autocomplete/" + word)
      .then(res => res.json())
      .then(data => {
        
        // sort
        data = data.sort((a,b) => {
          return a.length - b.length;
        })

        this.setState({
          words: data,
          errorMsg: ""
        });

      })
      .catch(err => {
        err.text().then(errorMessage => {
          this.setState({
            errorMsg: String(errorMessage)
          });
        })
      });
  }

  createSuggestion(word) {
    let words = this.inputRef.current.value.split(" ");
    words = words.slice(0, words.length -1);

    if (words.length > 0) {

      let str = words[0];
      for (let i = 1; i < words.length; i++) {
        str = str.concat(" ", words[i]);
      }
  
      return (str + " " + word);
    } else {
      return word;
    }
    
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
          {this.state.words.map((word, key) =>
            <option key={key} value={this.createSuggestion(word)} />
          )}
        </datalist>

        <p ref={this.errorText} style={{color: "red"}}>
          {this.state.errorMsg}
        </p>

      </div>
    )
  }
}

export default App;
