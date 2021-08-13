import React, { Component } from "react";

export default class RecruitEmployeesTable extends Component {
  render() {
    return (
      <div>
        <div className="row mt-5 mb-5">
          <h1 className="text-center">Recruit Employees</h1>
          <div className="col-md-12 mt-2">
            <div className="card mt-3 boderRadiusCards">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Development</h5>
                  </div>
                </div>
                <table className="table table-hover">        
                  <tbody>
                        <tr>
                        <td>1</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                        <td>2</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                        <td>2</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="card mt-3 boderRadiusCards">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Marketing</h5>
                  </div>
                </div>
                <table className="table table-hover">
                  <tbody>
                        <tr>
                        <td>1</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                        <td>2</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="card mt-3 boderRadiusCards">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Quality Assurance</h5>
                  </div>
                </div>
                <table className="table table-hover">
                  <tbody>
                        <tr>
                        <td>1</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                        <td>2</td>
                      <td>P001</td>
                      <td>Senura Jayadeva</td>
                      <td>
                        <button className="btn btn-primary empTableBtn">
                       <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
