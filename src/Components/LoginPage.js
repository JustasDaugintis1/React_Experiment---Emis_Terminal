import React from 'react';

let users = [
    {
        id: 1,
        username: "test",
        password: "test",
        firstName: "Test",
        lastName: "User"
    }
]

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.onInUser = this
            .onInUser
            .bind(this);
        this.onInPass = this
            .onInPass
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    onInUser(event) {
        this.setState({username: event.target.value});
    }

    onInPass(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        users.some((element) => {
            if (this.state.username === element.username && this.state.password === element.password) {
                console.log("logged in as " + element.firstName + " " + element.lastName)
            }
        })
    }
    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <hr/>
                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onInUser}
                        style={{
                        margin: 10
                    }}></input>
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.onInPass}
                        style={{
                        margin: 10
                    }}></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;
