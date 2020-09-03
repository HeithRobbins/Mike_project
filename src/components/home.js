import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.PostImages = [
      "../style/images/logo.jpg",
      "../style/images/keylala.jpg",
      "../style/images/keylala.jpg",
    ];
  }

  changePicForwards() {
    let i = this.state.index;
    if (i == this.PostImages.length - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    this.setState({ index: i });
  }

  changePicBackwards() {
    let i = this.state.index;
    if (i == 0) {
      i = this.PostImages.length - 1;
    } else {
      i = i - 1;
    }
    this.setState({ index: i });
  }

  render() {
    var CurrentPic = this.PostImages[this.state.index];

    return (
      <div>
        <div className="top-section-actions">
          <div className="image-holder">
            <img className="blog-pictures" src={CurrentPic} />
          </div>
          <div className="icon-name">
            <div className="left-arrow-action arrow-icons">
              <i
                onClick={(e) => this.changePicForwards(e)}
                className="fa fa-arrow-circle-o-left fa-2x"
                aria-hidden="true"
              ></i>
            </div>
            <div className="right-arrow-action arrow-icons">
              <i
                onClick={(e) => this.changePicBackwards(e)}
                className="fa fa-arrow-circle-o-right fa-2x"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
