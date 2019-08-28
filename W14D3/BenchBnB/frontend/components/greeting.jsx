import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Greeting extends Component {
    constructor(props){
        super(props)
    }
    render() {
      const display = this.props.currentUser ? (
        <div>
          <h3>Welcome {currentUser.username}!</h3>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link className="btn" to="/signup">Sign Up</Link>
          <br/>
          <Link className="btn" to="/login">Log In</Link>
        </div>
      );
      return (
          <div>{display}</div>
      )
    }
} 
export default Greeting;