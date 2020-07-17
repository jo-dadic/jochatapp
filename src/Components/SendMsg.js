import React, { Component } from "react";

export default class SendMsg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  // funkcija koja novu vrijednost prosljeđuje u App i resetira input polje
  sendMsg = (e) => {
    e.preventDefault(); // da sprječimo refreshanje aplikacije

    this.props.onSendMsg(this.state.message);
    this.setState({ message: "" });
  };

  // uzima utipkanu vrijednost poruke i setira state text na tu vrijednost
  handleTextChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.sendMsg}>
        <input
          type="text"
          value={this.state.message}
          placeholder="Type your message here."
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Send" />
      </form>
    );
  }
}
