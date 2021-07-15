class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      message: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  handleClick(event) {
    this.setState((state, message) => ({
      key: event.target.firstElementChild.play(),
      message: event.target.id
    })); 
  }
  
  handleKeyPress(event) {
    if (event.keyCode === 81) {
      this.setState((state, message) => ({
        key: document.getElementById("Q").play(),
        message: "heater-1"
      }));
    } else if (event.keyCode === 87) {
      this.setState((state, message) => ({
        key: document.getElementById("W").play(),
        message: "heater-2"
      }));
    } else if (event.keyCode === 69) {
      this.setState((state, message) => ({
        key: document.getElementById("E").play(),
        message: "heater-3"
      }));
    } else if (event.keyCode === 65) {
      this.setState((state, message) => ({
        key: document.getElementById("A").play(),
        message: "heater-4"
      }));
    } else if (event.keyCode === 83) {
      this.setState((state, message) => ({
        key: document.getElementById("S").play(),
        message: "clap"
      }));
    } else if (event.keyCode === 68) {
      this.setState((state, message) => ({
        key: document.getElementById("D").play(),
        message: "open-hh"
      }));
    } else if (event.keyCode === 90) {
      this.setState((state, message) => ({
        key: document.getElementById("Z").play(),
        message: "kick-n'-hat"
      }));
    } else if (event.keyCode === 88) {
      this.setState((state, message) => ({
        key: document.getElementById("X").play(),
        message: "kick"
      }));
    } else if (event.keyCode === 67) {
      this.setState((state, message) => ({
        key: document.getElementById("C").play(),
        message: "closed-hh"
      }));
    }        
  }
  render() {
    return (
      <div id="display">
        <button className="drum-pad" id="heater-1" onClick={this.handleClick}>
          Q
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            className="clip"
            id="Q"
          ></audio>
        </button>
        <button className="drum-pad" id="heater-2" onClick={this.handleClick}>
          W
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            className="clip"
            id="W"
          ></audio>
        </button>
        <button className="drum-pad" id="heater-3" onClick={this.handleClick}>
          E
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            className="clip"
            id="E"
          ></audio>
        </button>
        <button className="drum-pad" id="heater-4" onClick={this.handleClick}>
          A
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            className="clip"
            id="A"
          ></audio>
        </button>
        <button className="drum-pad" id="clap" onClick={this.handleClick}>
          S
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            className="clip"
            id="S"
          ></audio>
        </button>
        <button className="drum-pad" id="open-hh" onClick={this.handleClick}>
          D
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            className="clip"
            id="D"
          ></audio>
        </button>
        <button className="drum-pad" id="kick-n'-hat" onClick={this.handleClick}>
          Z
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            className="clip"
            id="Z"
          ></audio>
        </button>
        <button className="drum-pad" id="kick" onClick={this.handleClick}>
          X
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            className="clip"
            id="X"
          ></audio>
        </button>
        <button className="drum-pad" id="closed-hh" onClick={this.handleClick}>
          C
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            className="clip"
            id="C"
          ></audio>
        </button>
        
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Machine />, document.getElementById("drum-machine"));
