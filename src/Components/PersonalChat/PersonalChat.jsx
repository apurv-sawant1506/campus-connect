import React from "react";
import "./PersonalChat.css";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
class PersonalChat extends React.Component {
  scrollbars = React.createRef();
  componentDidMount() {
    this.scrollbars.current.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollbars.current.scrollToBottom();
  }

  render() {
    // console.log(this.props);
    const yourName = this.props.userName;
    return (
      <Scrollbars autoHide ref={this.scrollbars}>
        {this.props.chatData && this.props.chatData.messages ? (
          <div className="chat__messages">
            {this.props.chatData.messages[this.props.user].map(
              (message, index) => {
                return (
                  <div
                    className={
                      yourName !== message.from
                        ? "message__card"
                        : "message__self__card"
                    }
                    key={index}
                  >
                    <p style={{ fontSize: 12 }}>{message.from}</p>
                    <p style={{ fontSize: 15, wordWrap: "anywhere" }}>
                      {message.message}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </Scrollbars>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.chatReducer.message["User123"]);
  return {
    chatData: state.chatReducer,
    userName: state.userReducer.user.userName,
  };
};

export default connect(mapStateToProps, null)(PersonalChat);
