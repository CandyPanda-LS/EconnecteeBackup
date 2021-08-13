import React, { Component } from "react";

export default class AttendenceHistory extends Component {
  render() {
    return (
      <div>
        <div className="card mt-5 mb-5 boderRadiusCards">
          <div className="card-body">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>In Time</th>
                        <th>Out Time</th>
                    </tr>
                </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>2020-08-10</h6>
                  </td>
                  <td>
                    <h6>08.30</h6>
                  </td>
                  <td>
                    <h6>18.30</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>2020-08-10</h6>
                  </td>
                  <td>
                    <h6>08.30</h6>
                  </td>
                  <td>
                    <h6>18.30</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>2020-08-10</h6>
                  </td>
                  <td>
                    <h6>08.30</h6>
                  </td>
                  <td>
                    <h6>18.30</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>2020-08-10</h6>
                  </td>
                  <td>
                    <h6>08.30</h6>
                  </td>
                  <td>
                    <h6>18.30</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>2020-08-10</h6>
                  </td>
                  <td>
                    <h6>08.30</h6>
                  </td>
                  <td>
                    <h6>18.30</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>2020-08-10</h6>
                  </td>
                  <td>
                    <h6>08.30</h6>
                  </td>
                  <td>
                    <h6>18.30</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
