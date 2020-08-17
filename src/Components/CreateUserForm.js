import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props);

        this.onChangefirstname = this.onChangefirstname.bind(this);
        this.onChangelastname = this.onChangelastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            isMember: false,

        }
    }

    onChangefirstname(event){
        this.setState({
            firstName: event.target.value
        })
    }

    onChangelastname(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            isMember: false
        }

        console.log(user);
        axios.post("http://localhost:5000/users/register", user)
            .then(res => console.log(res.data));
        //window.location = "/";
    }

    render() {
        return(
            <div className="container">
                <h3 className="text-center"> Create User </h3>

                <form onSubmit={this.onSubmit}>
                   
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" required className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangefirstname} />
                    </div>

                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" required className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangelastname} />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" required className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" required className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>

                    <input type="submit" value="Register" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}