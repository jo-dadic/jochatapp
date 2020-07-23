import React, { Component } from "react";

export default class SendMsg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  sendMsg = (e) => {
    e.preventDefault();
    this.props.onSendMsg(this.state.text);
    this.setState({ text: "" });
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="input">
        <form onSubmit={this.sendMsg}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder="Type your message here."
          />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
