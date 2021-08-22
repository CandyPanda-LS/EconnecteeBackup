import React, { Component } from "react";
import { storage } from "../../../firebase";
import Progress from "../../../common/ProgressBar/progress";
import { Form } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/ProjectManagerActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class EditProfilePM extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onEditProfile = this.onEditProfile.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      id: this.props.currentPM._id,
      name: this.props.currentPM.name,
      username: this.props.currentPM.username,
      password: "",
      contactnumber: this.props.currentPM.mobileNumber,
      profileImage: this.props.currentPM.profileImg,
      uploadProfilePercentage: 0,
    };
  }

  uploadImage(e) {
    if (e.target.files[0] !== null) {
      const uploadTask = storage
        .ref(`users/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ uploadProfilePercentage: progress });
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("users")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ profileImage: url });
            });
        }
      );
    } else {
    }
  }

  onEditProfile(e) {
    e.preventDefault();

    const newProfileDetails = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      mobileNumber: this.state.contactnumber,
      profileImg: this.state.profileImage,
    };
    this.props.updateProjectManager(
      this.state.id,
      newProfileDetails,
      () => {
        // this.props.fetchProjectById(this.props.projectId)
        toast.success("Profile Edited", {
          autoClose: 2000,
        });
        window.location="/pmdashboard"
      },
      () => {
        // this.props.fetchProjectById(this.props.projectId)
        toast.error("Something went wrong", {
          autoClose: 2000,
        });
      }
    );
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.props.fetchProjectManagerDetails(() => {});
  }
  render() {
    return (
      <div>
        {this.props.currentPM ? (
          <div className="container mt-5">
            <div className="card">
              <div className="container p-5">
                <h3 className="text-left" style={{ color: "#087E8B" }}>
                  Edit your Account
                </h3>
                <Form onSubmit={this.onEditProfile}>
                  <div className="row mb-2">
                    <div className="row m-0 mb-3 col">
                      <label htmlFor="name" className="form-label p-0">
                        Project manager Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        onChange={(e) => {
                          this.onValueChange(e);
                        }}
                        value={this.state.name}
                      />
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="row m-0 mb-3 col">
                      <label htmlFor="username" className="form-label p-0">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        name="username"
                        onChange={(e) => {
                          this.onValueChange(e);
                        }}
                        value={this.state.username}
                      />
                    </div>
                    <div className="row m-0 mb-3 col">
                      <label htmlFor="password" className="form-label p-0">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        onChange={(e) => {
                          this.onValueChange(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row m-0 mb-2">
                    <label htmlFor="cnumber" className="form-label p-0">
                      Contact Number
                    </label>
                    <input
                      type="cnumber"
                      id="email"
                      className="form-control"
                      name="contactnumber"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                      value={this.state.contactnumber}
                    />
                  </div>
                  <div className="mb-3">
                    <div>
                      <img
                        src={this.state.profileImage}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>
                    <label htmlFor="profile-image" className="form-label">
                      Profile Image
                    </label>
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="profile-image"
                        name="imageUrl"
                        onChange={(e) => {
                          this.uploadImage(e);
                        }}
                      />
                    </div>

                    <div className="mt-3">
                      <Progress
                        percentage={this.state.uploadProfilePercentage}
                      />
                    </div>
                  </div>
                  <div className="mb-3"></div>
                  <div className="row m-0 mt-5 mb-5">
                    <button
                      type="submit"
                      className="btn  btn-lg btn-block"
                      style={{ backgroundColor: "#087E8B" }}
                    >
                      EDIT
                    </button>
                  </div>
                </Form>
                <ToastContainer/>
              </div>
            </div>
          </div>
        ) : (
          <div className="loadingScreen">
            <div className="col-12 p-5">
              <center>
                <Loader
                  type="Grid"
                  color="#087E8B"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              </center>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentPM: state.projectManagerReducer.singleProjectManager,
});

const mapActionToProps = {
  fetchProjectManagerDetails: actions.fetchProjectManagerDetails,
  updateProjectManager: actions.updateProjectManager,
};
export default connect(mapStateToProps, mapActionToProps)(EditProfilePM);