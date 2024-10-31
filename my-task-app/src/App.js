import './App.css';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import { useState } from "react";

function App() {
    const initialTasks = [
        { id: 1, text: "Learn React" },
        { id: 2, text: "Do homework" },
        { id: 3, text: "Cook dinner" },
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [showForm, setShowForm] = useState(false);

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            <Header toggleFormVisibility={toggleFormVisibility} showForm={showForm} />
            {showForm && <AddTask addTask={addTask} />}
            {tasks.length > 0 ? (
                <TasksList tasks={tasks} deleteTask={deleteTask} />
            ) : (
                <p>No tasks left</p>
            )}
        </div>
    );
}

export default App;