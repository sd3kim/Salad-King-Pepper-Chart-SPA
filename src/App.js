import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    spice_level: 0,
    spice_status: "No Spice",
  };

  increase() {
    this.setState({
      spice_level: this.state.spice_level + 1,
      spice_status: this.current_spice_status(this.state.spice_level + 1),
    });
  }

  decrease() {
    if (this.state.spice_level <= 0) {
      return;
    }
    this.setState({
      spice_level: this.state.spice_level - 1,
      spice_status: this.current_spice_status(this.state.spice_level - 1),
    });
  }

  // setting state based off state using setState

  current_spice_status(spice_level) {
    if (spice_level <= 0) {
      return "No Spice";
    } else if (spice_level === 1) {
      return "Nice";
    } else if (spice_level > 1 && spice_level < 5) {
      return "Start mopping your brow";
    } else if (spice_level >= 5 && spice_level < 10) {
      return "Watch out";
    } else if (spice_level >= 10 && spice_level < 15) {
      return "Are you sure?";
    } else if (spice_level >= 15 && spice_level < 20) {
      return "All guarantees are void";
    } else if (spice_level === 20) {
      return "May cause stomach upset";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>🌶️ Salad King Pepper Chart SPA 🌶️</h1>
          <div className="btns">
            <button
              onClick={() => this.increase()}
              type="button"
              class="btn btn-danger"
            >
              Add Some Heat 🔥
            </button>
            <button
              onClick={() => this.decrease()}
              type="button"
              class="btn btn-success"
            >
              Cool It Off 🧊
            </button>
          </div>
          <div>
            <h2>Spice Level: {this.state.spice_level}</h2>
            <h2>Status: {this.state.spice_status}</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
