import React from "react";
// api
import axios from "axios";

// css
import './app.css'
class App extends React.Component {
  state = { advice: "" };

  // lifecycle method: after refresh the website some content should load on it
  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{this.state.advice}</h1>
                <button className="button" onClick={this.fetchApi}>
                    <span>GIVE ME AN ADVICE</span>
                </button>
            </div>
        </div>
      
    );
  }
}

export default App;
