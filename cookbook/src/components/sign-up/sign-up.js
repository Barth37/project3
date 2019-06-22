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
            <form class="sign-up">
                <p>Username</p>
                <div class="ui input">
                    <input type="text" placeholder="Username" value={this.state.username}/>
                </div>
                <p>Email</p>
                <div class="ui input">
                
                    <input type="text" placeholder="Email" value={this.state.email}/>
                </div>
                <p>Password</p>
                <div class="ui input">
                    
                    <input type="text" placeholder="Password" value={this.state.password}/>
                </div>
                <button class="ui button">
                Submit                
                </button>
            </form>
        );
    }

}