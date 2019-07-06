import React from 'react';
import './sign-up.css';

export default class Form extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    render() {
        return (
            
            <div id="loginBtn">
                <button class="ui button">
                    Login
                </button>
            
            <form class="sign-up">
                <p>Username</p>
                <div class="ui input">
                    <input type="text" placeholder="Username" />
                </div>
                <p>Email</p>
                <div class="ui input">
                    <input type="text" placeholder="Email" />
                </div>
                <p>Password</p>
                <div class="ui input">
                    <input type="text" placeholder="Password" />
                </div>
                <br></br>
                <button class="ui button">
                Submit                
                </button>
            </form>
            //  </div>
        );
    }

}