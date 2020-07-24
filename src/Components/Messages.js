import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class Messages extends Component {
  renderMessage(message) {
    // for data
    const { member, text } = message;
    const { currentMember } = this.props;

    // to manage className
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "message currentMember" : "message";

    return (
      <li className={className} key={uuidv4()}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div>
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const { messages } = this.props;
    return (
      <ul className="list">{messages.map((m) => this.renderMessage(m))}</ul>
    );
  }
}
