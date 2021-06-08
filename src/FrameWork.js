import React from "react";

const Frame = (Study) => {
  class NewStudy extends React.Component {
    state = {
      Books: 0
    };

    handleClick = () => {
      this.setState({ Books: this.state.Books + 1 });
    };
    render() {
      return (
        <div>
          <Study
            HocFrameWork="Spring"
            HocBooks={this.state.Books}
            HocHandleclick={this.handleClick}
          />
        </div>
      );
    }
  }
  return NewStudy;
};

export default Frame;
