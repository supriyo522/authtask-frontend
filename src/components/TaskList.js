import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

    useEffect(() => {
        const loadTasks = async () => {
            const tasksData = await fetchTasks();
            setTasks(tasksData);
        };

        loadTasks();
    }, []);

    const handleCreate = async () => {
        await createTask(newTask);
        const tasksData = await fetchTasks();
        setTasks(tasksData);
    };

    const handleUpdate = async (id, updates) => {
        try {
            const updatedTask = await updateTask(id, updates);
            setTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        const tasksData = await fetchTasks();
        setTasks(tasksData);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Task List</h1>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    style={styles.input}
                />
                <button onClick={handleCreate} style={styles.button}>Add Task</button>
            </div>

            <div style={styles.taskList}>
                {tasks.map((task) => (
                    <Task
                        key={task._id}
                        task={task}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '20px',
        fontSize: '24px',
    },
    form: {
        marginBottom: '20px',
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    taskList: {
        textAlign: 'left',
    },
};

export default TaskList;


