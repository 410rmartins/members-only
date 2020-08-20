import React, {Component} from 'react';
import axios from 'axios';
import CreateMessage from "./CreateMessage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
            message_list: []
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/messages/list")
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        message_list: res.data.map(message => (
                            {title: message.title,
                                text: message.text,
                                author: message.author
                            })),
                        
                    })
                }
                console.log(res.data);
                //verify user in response
                const user = res.data.user;
            });
    }

    render(){


        return (
            <div className="container text-center">
            <h2> Welcome to The secret society </h2>

                There are secrets hidden here, but unluckly you're not a member.
                If you want to learn more about us and ba a part of this community 
                you have to sign up and become a member.


            </div>
        );
        
    }
}