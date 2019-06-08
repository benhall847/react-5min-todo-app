import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:["do this", "dont forget this"],
            input:''
        }
    }
    _addTodo= (todo)=>{
        this.setState({
            todos:this.state.todos.concat(todo),
            input:''
        })
    }
    _deleteTodo= (i)=>{
        let newArray = this.state.todos
        newArray.splice(i, 1)
        this.setState({todos:newArray})
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-app">
                <div className="header">
                    Ben's todos
                </div>
                <div className="todos-body">
                    {todos.map((eaTodo, i)=>(
                        <div key={i} className="todo-body">
                            <div className="todo">
                                {eaTodo}
                            </div>
                            <button onClick={()=>{
                                this._deleteTodo(i)
                            }}>
                                X
                            </button>
                        </div>
                    ))}
                </div>
                <input value={this.state.input} onChange={(e)=>{
                    this.setState({input:e.target.value})
                }}>

                </input>
                <button onClick={()=>{
                    this._addTodo(this.state.input)
                }}>
                    Add a todo!
                </button>
            </div>
        )
    }
}

export default Todo
