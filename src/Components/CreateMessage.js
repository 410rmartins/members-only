import React, { Component } from 'react';

export default class MessageForm extends Component {
    constructor(props){
        super (props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);

        this.state = {
            title:"",
            text:""
        }
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeText(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const message = {
            title: this.state.title,
            text: this.state.text,
            //assign current user
            date: new Date()
        }

        console.log(message);
    }

    render() {
        return(
            <div className="container">
                <h3 className="text-center"> Write a message</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" required className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>

                        <div className="form-group">
                        <label>Message</label>
                        <input type="text" required className="form-control"
                            value={this.state.text}
                            onChange={this.onChangeText}
                        />
                    </div>

                    <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}