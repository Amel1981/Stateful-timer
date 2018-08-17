import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*******************************/

const SecondsToTime = TotalSeconds => {
  const seconds = TotalSeconds % 60;
  const minutes = Math.floor((TotalSeconds / 60) % 60);
  const hours = Math.floor(TotalSeconds / 3600);
  return {
    seconds,
    minutes,
    hours
  };
};
const FormatTime = TotalSeconds => {
  const TimeObject = SecondsToTime(TotalSeconds);
  return (
    String(TimeObject.hours).padStart(2, "0") +
    ":" +
    String(TimeObject.minutes).padStart(2, "0") +
    ":" +
    String(TimeObject.seconds).padStart(2, "0")
  );
};
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10
    };

    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }
  render() {
    return (
      <div className="timer">
        <div className="horloge">{FormatTime(this.state.seconds)}</div>
        <div className="texthour">
          <h6> Hours</h6>
          <h6> Minutes</h6>
          <h6> Seconds</h6>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.body);
