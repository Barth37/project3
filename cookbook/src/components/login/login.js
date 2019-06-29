import React from "react";
import "./login.css";

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <form class="log-in">
                <p>Email</p>
                <div class="ui input">
                    <input type="text" placeholder="Email" value={this.state.email}/>
                </div>
                <p>Password</p>
                <div class="ui input">
                    <input type="text" placeholder="Password" value={this.state.password}/>
                </div>
                <br></br>
                <button class="ui button">
                Submit                
                </button>
            </form>
        );
    }

}
