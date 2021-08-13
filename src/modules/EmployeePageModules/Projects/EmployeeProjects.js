import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EmployeeProjects.css";

export default class EmployeeProjects extends Component {
  render() {
    return (
      <div className="card mt-5 boderRadiusCards">
        <div className="card-body">
          <div>
            <div className="mt-2 text-center">
              <h1>ASSIGNED PROJECTS</h1>
            </div>
            <div className="row mb-5 p-4">
              <div className="col-md-2">
                <Link to="/empsingleproject">
                <div className="card mt-5 boderRadiusCards empProjectCards">
                  <div className="card-body">
                   <h6>P001</h6>
                   <h2 className="empProjectCardsText" style={{fontSize:"20px"}}>Employee Management System</h2>
                   <i class="bi bi-circle-fill" style={{color:"#DB380A",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#DF9E45",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#028759",fontSize:"30px",margin:"5px"}}></i>

                   <p>Project Manager</p>
                   <h6 className="empProjectCardsText">Senura Jayadeva</h6>
                  </div>
                </div>
                </Link>
              </div>
              
              <div className="col-md-2">
                <Link to="/empsingleproject">
                <div className="card mt-5 boderRadiusCards empProjectCards">
                  <div className="card-body">
                   <h6>P001</h6>
                   <h2 className="empProjectCardsText" style={{fontSize:"20px"}}>Employee Management System</h2>
                   <i class="bi bi-circle-fill" style={{color:"#DB380A",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#DF9E45",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#028759",fontSize:"30px",margin:"5px"}}></i>

                   <p>Project Manager</p>
                   <h6 className="empProjectCardsText">Senura Jayadeva</h6>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="/empsingleproject">
                <div className="card mt-5 boderRadiusCards empProjectCards">
                  <div className="card-body">
                   <h6>P001</h6>
                   <h2 className="empProjectCardsText" style={{fontSize:"20px"}}>Employee Management System</h2>
                   <i class="bi bi-circle-fill" style={{color:"#DB380A",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#DF9E45",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#028759",fontSize:"30px",margin:"5px"}}></i>

                   <p>Project Manager</p>
                   <h6 className="empProjectCardsText">Senura Jayadeva</h6>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="/empsingleproject">
                <div className="card mt-5 boderRadiusCards empProjectCards">
                  <div className="card-body">
                   <h6>P001</h6>
                   <h2 className="empProjectCardsText" style={{fontSize:"20px"}}>Employee Management System</h2>
                   <i class="bi bi-circle-fill" style={{color:"#DB380A",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#DF9E45",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#028759",fontSize:"30px",margin:"5px"}}></i>

                   <p>Project Manager</p>
                   <h6 className="empProjectCardsText">Senura Jayadeva</h6>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="/empsingleproject">
                <div className="card mt-5 boderRadiusCards empProjectCards">
                  <div className="card-body">
                   <h6>P001</h6>
                   <h2 className="empProjectCardsText" style={{fontSize:"20px"}}>Employee Management System</h2>
                   <i class="bi bi-circle-fill" style={{color:"#DB380A",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#DF9E45",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#028759",fontSize:"30px",margin:"5px"}}></i>

                   <p>Project Manager</p>
                   <h6 className="empProjectCardsText">Senura Jayadeva</h6>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-2">
                <Link to="/empsingleproject">
                <div className="card mt-5 boderRadiusCards empProjectCards">
                  <div className="card-body">
                   <h6>P001</h6>
                   <h2 className="empProjectCardsText" style={{fontSize:"20px"}}>Employee Management System</h2>
                   <i class="bi bi-circle-fill" style={{color:"#DB380A",fontSize:"30px",margin:"5px"}}>a</i>
                   <i class="bi bi-circle-fill" style={{color:"#DF9E45",fontSize:"30px",margin:"5px"}}></i>
                   <i class="bi bi-circle-fill" style={{color:"#028759",fontSize:"30px",margin:"5px"}}></i>

                   <p>Project Manager</p>
                   <h6 className="empProjectCardsText">Senura Jayadeva</h6>
                  </div>
                </div>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
