import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props.formType);
        // debugger;
        if(this.props.formType === "login")
            this.props.login(this.state).then(() => this.props.history.push('/'));
        else
            this.props.signup(this.state).then(() => this.props.history.push('/'));
    }

    render() {
        let headerText = "";
        this.props.formType === 'login' ? headerText = "Log in!": headerText = "Sign up!";
        return (
            <div className="session-form">
                <h2>{headerText}</h2>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>{headerText}</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default SessionForm;
