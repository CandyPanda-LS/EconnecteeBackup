import React, { Component } from "react";

export default class FeebackTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprintList: this.props.sprints,
    };
  }
  render() {
    return (
      <div>
        <div className="row mt-5 mb-5">
          <h1 className="text-center">Feedback Overview</h1>

          {this.state.sprintList.map((singleSprint) => {
            return (
              <div className="col-md-12 mt-2">
                <div className="card mt-3 boderRadiusCards">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <h3>Sprint</h3>
                        <h5>
                          {singleSprint.fromDate.substring(0, 10) +
                            " - " +
                            singleSprint.toDate.substring(0, 10)}
                        </h5>
                        <button className="btn sprintTableBtn">Analyze</button>
                      </div>
                    </div>
                    <table className="table table-hover">
                      <tbody>
                        {singleSprint.feedbackList.map((singleFeedback,index) => {
                          return (
                            <tr>
                              <td>{++index}</td>
                              <td>
                                {singleFeedback.feedback}
                              </td>
                              <td>
                                <button className="btn btn-danger empTableBtn">
                                  <i class="bi bi-trash-fill"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
