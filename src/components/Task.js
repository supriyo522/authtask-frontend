import React, { useState } from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(task._id, editedTask);
        setIsEditing(false);
    };

    return (
        <div style={styles.taskContainer}>
            {isEditing ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleChange}
                        placeholder="Title"
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="description"
                        value={editedTask.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={styles.input}
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={editedTask.dueDate.substring(0, 10)}
                        onChange={handleChange}
                        placeholder="Due Date"
                        style={styles.input}
                    />
                    <div style={styles.buttonGroup}>
                        <button type="submit" style={styles.saveButton}>Save</button>
                        <button type="button" onClick={() => setIsEditing(false)} style={styles.cancelButton}>Cancel</button>
                    </div>
                </form>
            ) : (
                <div style={styles.taskDetails}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{new Date(task.dueDate).toLocaleDateString()}</p>
                    <div style={styles.buttonGroup}>
                        <button onClick={() => setIsEditing(true)} style={styles.editButton}>Edit</button>
                        <button onClick={() => onDelete(task._id)} style={styles.deleteButton}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    taskContainer: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    saveButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cancelButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    taskDetails: {
        textAlign: 'left',
    },
    editButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#ffc107',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    deleteButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#dc3545',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Task;



