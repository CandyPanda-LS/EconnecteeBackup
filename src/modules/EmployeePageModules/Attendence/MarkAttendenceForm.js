import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";
import WebcamValidator from "./WebcamValidator";

export default class MarkAttendenceForm extends Component {
  constructor(props) {
    super(props);

    this.toggleCheckByWebcamInTime = this.toggleCheckByWebcamInTime.bind(this);
    this.toggleCheckByWebcamOutTime = this.toggleCheckByWebcamOutTime.bind(this);

    this.state = {
      modalCheckByWebcamInTime: false,
      modalCheckByWebcamOutTime: false,
    };
  }

  toggleCheckByWebcamInTime = () => {
    this.setState({
      modalCheckByWebcamInTime: !this.state.modalCheckByWebcamInTime,
    });
  };

  toggleCheckByWebcamOutTime = () => {
    this.setState({
      modalCheckByWebcamOutTime: !this.state.modalCheckByWebcamOutTime,
    });
  };

  render() {
    return (
      <div>
        <div className="card boderRadiusCards">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <Calendar />
                  </div>
                  <div className="col-md-12">
                    <Form>
                      <FormGroup className="mt-2">
                        <Label for="inTime">In Time</Label>
                        <Input type="time" name="inTime" id="inTime" />
                      </FormGroup>
                      <FormGroup className="mt-2">
                        <Button className="mt-2 modalCreateBtn" onClick={this.toggleCheckByWebcamInTime}>ADD</Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <Calendar />
                  </div>
                  <div className="col-md-12">
                    <Form>
                      <FormGroup className="mt-2">
                        <Label for="outTime">Out Time</Label>
                        <Input type="time" name="outTime" id="outTime" />
                      </FormGroup>
                      <FormGroup className="mt-2">
                        <Button className="mt-2 modalCreateBtn" onClick={this.toggleCheckByWebcamOutTime}>ADD</Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modals Section */}

        {/* Check In-Time By Webcam Modal */}
        <Modal
          isOpen={this.state.modalCheckByWebcamInTime}
          toggle={this.toggleCheckByWebcamInTime}
        >
          <ModalHeader toggle={this.toggleCheckByWebcamInTime}>
          CONFIRM IN TIME
          </ModalHeader>
          <ModalBody>
            <WebcamValidator timeSlot="IN TIME"/>
          </ModalBody>
        </Modal>

        {/* Check Out-Time By Webcam Modal */}
        <Modal
          isOpen={this.state.modalCheckByWebcamOutTime}
          toggle={this.toggleCheckByWebcamOutTime}
        >
          <ModalHeader toggle={this.toggleCheckByWebcamOutTime}>
          CONFIRM OUT TIME
          </ModalHeader>
          <ModalBody>
            <WebcamValidator timeSlot="OUT TIME"/>
          </ModalBody>
        </Modal>

        {/* End of Modals Section */}
      </div>
    );
  }
}
