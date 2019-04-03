import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="clock-container">
        <div className="clock" id="time" >
          {this.state.date.toLocaleTimeString()}
        </div>
        <div
          className="clock"
          id="date-time"
        >
          <p>
            {this.state.date.toLocaleDateString()}
            <br />
            {this.state.date.toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
