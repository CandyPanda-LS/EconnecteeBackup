import React, { Component } from "react";

export default class DoneTasks extends Component {
  render() {
    return (
      <div className="card boderRadiusCards">
        <div className="card-body">
          <div className="row">
            <h3 className="mb-3">Done</h3>
            {this.props.doneList.map((singleIssue) => {
              return (
                <div className="col-md-12 mb-4">
                  <div className="card boderRadiusCards">
                    <div className="card-body">
                      <h6>{singleIssue.issueName}</h6>
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <i
                            class="bi bi-arrow-right-circle-fill"
                            style={{
                              color: "#028759",
                              fontSize: "30px",
                              margin: "5px",
                            }}
                          ></i>
                        </div>
                        <div className="col-md-6">Estimated Days {singleIssue.estimatedTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
