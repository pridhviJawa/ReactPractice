import React, { useEffect, useState } from 'react'
import { TodoService } from '../Services/TodoService';
import { Itodo } from '../Models/ITodo';

const TodoList: React.FC<{userTodos: Itodo[]}> = (props) => {
    const [todos, setTodos] = useState<Itodo[]>([] as Itodo[]);
    const [errMsg, setErrMsg] = useState<string>("");

    useEffect(() => {
                setTodos(props.userTodos)
    }, [props.userTodos])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-info">Todo List</p>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis sunt consequuntur odit, iure voluptatibus modi. Ducimus possimus nesciunt placeat ex, nobis ea voluptatibus cupiditate, accusantium quisquam quis nulla quasi.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-striped table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>SNo</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.length > 0 ?
                                    todos.map((todos, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{todos.title}</td>
                                                <td className={todos.completed ? 'text-success' : 'text-warning'}>{todos.completed ? "Completed" : "Pending"}</td>
                                            </tr>
                                        )
                                    }) :
                                    <tr className='text-center'>
                                        {errMsg}
                                    </tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList