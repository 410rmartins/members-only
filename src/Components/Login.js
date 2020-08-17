import React, { Component } from 'react';
//import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super (props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:"",
            password: ""
        }
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        
        const auth = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(auth);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" required className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" required className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>

                <input type="submit" value="Send" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}