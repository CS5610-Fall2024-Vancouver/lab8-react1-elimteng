import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function TasksList({ tasks, deleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <FaRegTrashAlt onClick={() => deleteTask(task.id)} style={{ cursor: 'pointer', marginLeft: '10px', fontSize: '13px' }} />
                </li>
            ))}
        </ul>
    );
}

export default TasksList;