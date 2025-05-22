import react, { useState } from 'react'

function ToDoList() {

    const [toDoList, setToDoList] = useState([]);

    const handleTaskAdd = () => {
        const task = document.getElementById('task');
        const taskValue = task.value
        if (taskValue.length !== 0) {
            setToDoList(t => [...t, taskValue]);
            document.getElementById('task').value = "";
        } else task.style.border = '2px solid red';
    }
    const handleDeleteTask = (index) => {
        const filtered = toDoList.filter((task, i) => i !== index);
        setToDoList(filtered);
    }
    const moveTaskUp = (index) => {
        if (index > 0) {
            const tasks = [...toDoList];

            [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];

            setToDoList([...tasks]);
        }
    }
    const moveTaskDown = (index) => {
        if (index < toDoList.length - 1) {
            const tasks = [...toDoList];

            [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];

            setToDoList([...tasks]);
        }
    }

    return (
        <div className='to-do-list'>
            <h2>To Do List</h2>
            <div id='input-field'>
                <input id='task' type="text" placeholder='Enter a task...' onFocus={(e) => e.target.style.border = 'none'} /><button id='button-add' onClick={handleTaskAdd}>Add</button>
            </div>
            <ul>
                {toDoList.map((task, index) =>
                    <li key={index}>
                        <p>{task}</p>
                        <button className='button-delete' onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className='button-UpDown' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='button-UpDown' onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
            </ul>
        </div>
    )
}

export default ToDoList