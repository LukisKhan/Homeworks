import React from 'react';
import { uniqueId } from '../../util/id_generator'

class TodoForm extends React.Component {
    constructor(props){
        // debugger
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() })
        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: ""
        })
    }

    update(property){
        return e => {
            this.setState({ [property]: e.target.value })
            console.log(this.state)
        };

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <label> Title:
                    <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')}/>
                </label>
                <label> Body:
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.update('body')} />
                </label>
                <button>Create</button>
            </form>
        )
    }

}

export default TodoForm