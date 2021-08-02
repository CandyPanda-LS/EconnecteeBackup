import React, { Component } from "react";
import "./EmployeeTable.css";

export class EmployeeTable extends Component {
  render() {
    return (
      <div className="card boderRadiusCards">
        <div className="card-body empTable">
          <table className="table table-hover">
            <thead>
              <tr className="empTableHeader">
                <th scope="col">#</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Image</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>DEV001</td>
                <td>Senura Jayadeva</td>
                <td>senurajayadeva@gmail.com</td>
                <td><img className="img-fluid rounded-circle employeeImage" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile image1" /></td>
                <td><button className="btn btn-primary empTableBtn"><i class="bi bi-gear-fill"></i></button></td>
                <td><button className="btn btn-danger empTableBtn"><i class="bi bi-trash-fill"></i></button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>DEV001</td>
                <td>Senura Jayadeva</td>
                <td>senurajayadeva@gmail.com</td>
                <td><img className="img-fluid rounded-circle employeeImage" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile image2" /></td>
                <td><button className="btn btn-primary empTableBtn"><i class="bi bi-gear-fill"></i></button></td>
                <td><button className="btn btn-danger empTableBtn"><i class="bi bi-trash-fill"></i></button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>DEV001</td>
                <td>Senura Jayadeva</td>
                <td>senurajayadeva@gmail.com</td>
                <td><img className="img-fluid rounded-circle employeeImage" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile image3" /></td>
                <td><button className="btn btn-primary empTableBtn"><i class="bi bi-gear-fill"></i></button></td>
                <td><button className="btn btn-danger empTableBtn"><i class="bi bi-trash-fill"></i></button></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>DEV001</td>
                <td>Senura Jayadeva</td>
                <td>senurajayadeva@gmail.com</td>
                <td><img className="img-fluid rounded-circle employeeImage" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile image4" /></td>
                <td><button className="btn btn-primary empTableBtn"><i class="bi bi-gear-fill"></i></button></td>
                <td><button className="btn btn-danger empTableBtn"><i class="bi bi-trash-fill"></i></button></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>DEV001</td>
                <td>Senura Jayadeva</td>
                <td>senurajayadeva@gmail.com</td>
                <td><img className="img-fluid rounded-circle employeeImage" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile image5" /></td>
                <td><button className="btn btn-primary empTableBtn"><i class="bi bi-gear-fill"></i></button></td>
                <td><button className="btn btn-danger empTableBtn"><i class="bi bi-trash-fill"></i></button></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>DEV001</td>
                <td>Senura Jayadeva</td>
                <td>senurajayadeva@gmail.com</td>
                <td><img className="img-fluid rounded-circle employeeImage" src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="profile image6" /></td>
                <td><button className="btn btn-primary empTableBtn"><i class="bi bi-gear-fill"></i></button></td>
                <td><button className="btn btn-danger empTableBtn"><i class="bi bi-trash-fill"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeTable;
