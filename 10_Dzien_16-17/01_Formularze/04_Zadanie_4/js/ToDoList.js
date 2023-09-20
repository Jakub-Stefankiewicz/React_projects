import React, {useState} from 'react';

const ToDoList = () => {
    const [task, addTask] = useState([{
            id: 1,
            name: "Rzecz do zrobienia",
            done: false
        },
            {
                id: 2,
                name: "Rzecz do zrobienia 2",
                done: true
            }]
    )

    const submitHandler = (e) => {
        e.preventDefault();
        const{id, name, done, value}=e.target;
        addTask(prevState => {
            return {
                ...prevState,
                [id]: prevState[prevState.length-1].id+1,
                [name]: value,
                [done]: false
            }
        })
    }

    return (
        <div className="toDoList">
            <form className="header" onSubmit={submitHandler}>
                <h2>Twoja lista zadań</h2>
                <input type="text" placeholder="np. Zrobić zakupy" name="name" value={task.name} />
                <input type="submit" className="btn-add" value="Dodaj"></input>
            </form>

            <ul>
                {task.map(task => {
                    return <li key={task.id} className={task.done ? "done" : " "} >{task.name}</li>
                })}
            </ul>
        </div>

    );
};

export default ToDoList;