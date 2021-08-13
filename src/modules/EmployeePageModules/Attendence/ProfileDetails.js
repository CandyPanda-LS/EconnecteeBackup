import React, { Component } from "react";
import Clock from "react-live-clock";

export default class ProfileDetails extends Component {
  render() {
    return (
      <div>
        <div className="card boderRadiusCards">
          <div className="card-body">
            <div className="row p-2">
              <div className="col-lg-12 empDashboardUserDetailsColOne">
                <img
                  className="empDashboardImage img-fluid"
                  src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                  alt="empImage"
                />
              </div>
              <div className="col-lg-12 empDashboardUserDetailsTwo mt-2 text-center">
                <h6>Dilmi Palliyaguruge</h6>
                <h6 className="text-muted">DEV001</h6>
                <h6 className="text-muted">Intern Software Engineer</h6>
                <h1>
                  <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
