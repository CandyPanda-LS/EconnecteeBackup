import React, {Component} from 'react';
import './AdminRegistrationPage.css'
import {Button, Form, FormGroup, Input} from "reactstrap";

class AdminRegistrationPage extends Component {
    render() {
        return (
            <div>
                <div className="RegistrationPageCard">
                    <div className="row RegistrationPageRow">
                        <div className="col-md-4 RegistrationPageColOne p-5">

                            <div className="container text-center">
                                <div className="container mb-3">
                                    <h5>REGISTER HERE!</h5>
                                </div>
                                <div className="container mt-5">
                                    <Form>
                                        <FormGroup className="mt-2">
                                            <Input type="email" name="email" id="email" placeholder="Email"/>
                                        </FormGroup>
                                        <FormGroup className="mt-2">
                                            <Input type="text" name="username" id="username" placeholder="Username"/>
                                        </FormGroup>
                                        <FormGroup className="mt-2">
                                            <Input type="password" name="password" id="password" placeholder="Password"/>
                                        </FormGroup>
                                        <FormGroup className="mt-2">
                                            <Input type="password" name="cpassword" id="cpassword" placeholder="Confirm password"/>
                                        </FormGroup>

                                        <FormGroup className="mt-5">
                                            <Button className="mt-2 loginBtn">
                                                Register
                                            </Button>
                                        </FormGroup>


                                    </Form>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 RegistrationPageColTwo p-5">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminRegistrationPage;