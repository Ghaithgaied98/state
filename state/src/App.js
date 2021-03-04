import { Component } from "react";
import "./App.css";
import Clock from "./Clock";

let time = new Date().toLocaleString();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "i'am a rapper",
      bio: "A long story",
      imgSrc: (
        <img src="http://www.gstatic.com/tv/thumb/persons/182420/182420_v9_bc.jpg" />
      ),
      profession: "hiphop rapper",
      show: false,
    };
  }

  render() {
    return (
      <div className="App-header">
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle show status
        </button>

      <div/>
  }
}
export default App;