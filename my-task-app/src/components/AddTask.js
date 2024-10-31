import React, { useState } from "react";

function AddTask({ addTask }) {
    const [taskText, setTaskText] = useState("");
    const [taskDetails, setTaskDetails] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!taskText) {
            alert("Please add a task");
            return;
        }
        addTask({ text: taskText, details: taskDetails });
        setTaskText("");
        setTaskDetails("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add Task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task Details"
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
            />
            <button type="submit">Save Task</button>
        </form>
    );
}

export default AddTask;