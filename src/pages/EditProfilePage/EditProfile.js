import React, {Component} from 'react';
import {Form} from 'reactstrap';
// import Progress from '../../common/ProgressBar/progress';

// let formData = {};
class EditProfile extends Component {
    // validateForm() {
    //     const data = {
    //         firstname: this.state.fname && this.state.fname.trim().length > 0 ? this.state.fname : null,
    //         lastname: this.state.lname && this.state.lname.trim().length > 0 ? this.state.lname : null,
    //         email: this.state.email && this.state.email.trim().length > 0 ? this.state.email : null,
    //         username: this.state.username && this.state.username.trim().length > 0 ? this.state.username : null,
    //         password: this.state.password && this.state.password.trim().length > 0 ? this.state.password : null,
    //         phonenumber: this.state.cnumber && this.state.cnumber.trim().length > 0 ? this.state.cnumber : null,
    //         imageurl: this.state.imageUrl && this.state.imageUrl.trim().length > 0 ? this.state.imageUrl : null,
    //         description: this.state.desctiption && this.state.desctiption.trim().length > 0 ? this.state.desctiption : null
    //     };
    //     formData = Object.assign({}, data);
    //     return true;
    // }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="card">
                        <div className="container p-5">
                            <h3 className="text-left" style={{color: "#087E8B"}}>Edit your Account</h3>
                            <Form>
                                <div className="row mb-2">
                                    <div className="row m-0 mb-3 col">
                                        <label htmlFor="fname" className="form-label p-0">First Name</label>
                                        <input type="text" id="fname" className="form-control" name="fname"  onChange={this.onChange}/>
                                        {/*{formData.firstname===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">First name is required</span> : null}*/}
                                    </div>
                                    <div className="row m-0 mb-3 col">
                                        <label htmlFor="lname" className="form-label p-0">Last Name</label>
                                        <input type="text" id="lname" className="form-control" name="lname"  onChange={this.onChange}/>
                                        {/*{formData.lastname===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Last name is required</span> : null}*/}
                                    </div>
                                </div>
                                <div className="row m-0 mb-2">
                                    <label htmlFor="email" className="form-label p-0">Email Address</label>
                                    <input type="text" id="email" className="form-control" name="email"  onChange={this.onChange}/>
                                    {/*{formData.email===null && this.state.formNotValid ? <span className="text-danger p-0 validation-text p-0">Email is required</span> : null}*/}
                                </div>
                                <div className="row mb-2">
                                    <div className="row m-0 mb-3 col">
                                        <label htmlFor="username" className="form-label p-0">Username</label>
                                        <input type="text" id="username" className="form-control" name="username"  onChange={this.onChange}/>
                                        {/*{formData.username===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Username is required</span> : null}*/}
                                    </div>
                                    <div className="row m-0 mb-3 col">
                                        <label htmlFor="password" className="form-label p-0">Password</label>
                                        <input type="password" id="password" className="form-control" name="password"  onChange={this.onChange}/>
                                        {/*{formData.password===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Password is required</span> : null}*/}
                                    </div>
                                </div>
                                <div className="row m-0 mb-2">
                                    <label htmlFor="cnumber" className="form-label p-0">Contact Number</label>
                                    <input type="cnumber" id="email" className="form-control" name="cnumber"  onChange={this.onChange}/>
                                    {/*{formData.phonenumber===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Phone number is required</span> : null}*/}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="profile-image" className="form-label">Profile Image</label>
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="profile-image" name="imageUrl" onChange={e => this.setImage(e)} />
                                        <button className="btn btn-color btn-sm" type="button" onClick={this.uploadImage}>UPLOAD</button>
                                    </div>
                                    {/*{formData.imageurl===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Profile image is required</span> : null}*/}
                                </div>
                                <div className="mb-3">
                                    {/*<Progress percentage={this.state.uploadPercentage} />*/}
                                </div>
                                <div className="row m-0 mb-3">
                                    <label htmlFor="desctiption" className="form-label p-0">Description</label>
                                    <textarea type="desctiption" id="desctiption" className="form-control" name="desctiption" onChange={(e) => {this.setState({desctiption: e.target.value})}}/>
                                    {/*{formData.description===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Description is required</span> : null}*/}
                                </div>
                                <div className="row m-0 mt-5 mb-5">
                                    <button type="button" className="btn  btn-lg btn-block"style={{backgroundColor: "#087E8B"}}>
                                        EDIT
                                    </button>
                                </div>


                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;