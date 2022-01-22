import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper1"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <h1>Frontend Projects</h1>
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.website} target="_blank">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="">
                            <div className="portfolio-item-meta">
                              <h3>{item.name}</h3>
                              <p>{item.description}</p>
                              <h5>Technologies Used</h5>
                              <p>{item.technologies}</p>
                              <a href={item.website} target="_blank">
                                {item.website}
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
                </div>
                  <div
              id="portfolio-wrapper2"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <h1>Backend Projects</h1>
              {resumeData.frontend &&
                resumeData.frontend.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.website} target="_blank">
                          <div className="">
                            <div className="portfolio-item-meta">
                              <h3>{item.name}</h3>
                              <p>{item.description}</p>
                              <h5>Technologies Used</h5>
                              <p>{item.technologies}</p>
                              <a href={item.website} target="_blank">
                                <i className="fa fa-github" /> Github
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
