import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="homes-container">
        <div className="why-us">
          <div className="home-right-side">
            <h2>this is the home page</h2>
            <h3>
              We provide Builders and Developers with professional, cost
              effective and quality framing services. Our staff has many years
              experience in framing industry and are well equipped to complete
              your project to your satisfaction.
            </h3>
          </div>
          <hr></hr>
          <div className="home-left-side">
            <div className="left-container">
              <div className="left-box">
                {/* <img src="#"> </img> */}
                <div>
                  <h2>Free Estimates</h2>
                </div>
                <hr></hr>
                <div>
                  <h3>Where here to help </h3>
                </div>
                <div>
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <hr>below all?</hr> */}
        <div className="home-bottom">
          <div className="bottom-container">
            <div className="above-bottom">
              <h2>Why Choose Us?</h2>
              <div className="condisions">
                <ul>
                  Customer Oriented
                  <li>
                    We pride ourselves on Customer Service, by keeping you
                    updated and having clear communication every step of the
                    way.
                  </li>
                  <li>Together, we work as a team to achieve your vision.</li>
                  <li>
                    We are committed to completing the job to your satisfaction
                  </li>
                  <li>
                    Maybe something about being punctual here or something about
                    you will show up when you say you will
                  </li>
                </ul>
                <ul>
                  Trustworthy
                  <li>
                    We rely on our customers, our customers can rely on us….help
                  </li>
                  <li>
                    As a small town oriented company, every customer matters, we
                    are here to stay, and word of mouth is our best advertising!
                  </li>
                  <li>
                    We are dependable, and honest. We maintain this through our
                    clear communication and working together as a team.
                  </li>
                </ul>
                <ul>
                  We are Passionate
                  <li>
                    We don’t consider this our job, we love what we do and this
                    is our craft.
                  </li>
                  <li>
                    We go a step above with everything we do, always trying to
                    improve our product, our service and our customer
                    satisfaction.
                  </li>
                  <li>We take pride in our work.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
