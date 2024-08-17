import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faStar } from '@fortawesome/free-solid-svg-icons';

function ToDo() {
    const [tasks, setTasks] = useState(['Clean the room', 'Eat', 'Sleep']);
    const [newTask, setNewTask] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    function handleInput(event) {
        setNewTask(event.target.value);
    }

    function handleEditInput(event) {
        setEditValue(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(indexToDelete) {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    }

    function editTask(indexToEdit) {
        setEditIndex(indexToEdit);
        setEditValue(tasks[indexToEdit]);
    }

    function saveTask(indexToSave) {
        const updatedTasks = tasks.map((task, index) => 
            index === indexToSave ? editValue : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditValue("");
    }

    return (
        <div className="bg-gray-500 h-screen flex justify-center items-center font-mono">
            <div className="bg-gray-600 p-4 h-2/4 w-96 text-center text-white rounded-xl">
                <h1 className="text-3xl m-4">Get things done</h1>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="What's your task?" 
                        onChange={handleInput}
                        value={newTask}
                        className="bg-gray-600 p-1 border-2 border-gray-500 placeholder:text-gray-400 rounded-lg"
                    />
                    <button 
                        onClick={addTask}
                        className="bg-gray-500 p-1.5 ml-2 rounded-lg"
                    >Add task</button>
                </div>

                <div>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} 
                                className="flex justify-between items-center ml-4 mr-2 mb-2 text-md bg-gray-500 p-1 rounded-lg max-h-9 h-9"> 
                                
                                {editIndex === index ? (
                                    <input 
                                        type="text"
                                        value={editValue}
                                        onChange={handleEditInput}
                                        className= "bg-gray-600 ml-2 rounded-md"
                                    />
                                ) : (
                                    <span className="ml-2 max-w-xs truncate">{task}</span>
                                )}

                                <div className="flex">
                                    {editIndex === index ? (
                                        <button
                                            onClick={() => saveTask(index)}
                                            className="cursor-pointer bg-gray-600 p-1 mr-2 rounded-lg"
                                        >Save</button>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon 
                                                icon={faTrash}  
                                                onClick={() => deleteTask(index)}
                                                className="cursor-pointer mr-2"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faPenToSquare} 
                                                onClick={() => editTask(index)}
                                                className="cursor-pointer mr-2"
                                            />
                                            <FontAwesomeIcon 
                                                icon={faStar} 
                                                className="cursor-pointer"
                                            />
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ToDo;
