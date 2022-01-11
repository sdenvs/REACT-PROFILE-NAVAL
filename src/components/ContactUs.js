import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <i className="fa fa-envelope" />
                <a href="mailto:sdenvs@gmail.com">sdenvs@gmail.com</a>
              </h4>
              <h4>
                <i className="fa fa-linkedin" />
                <a href={resumeData.linkedinId} target="_blank">
                  {resumeData.linkedinId}
                </a>
              </h4>
              <h4>
                <i class="fa fa-phone" />
                <a href="tel:+919834768963">+91 9834768963</a>
              </h4>
              <h4>
                <i class="fa fa-map-marker" />
                <span>India</span>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
