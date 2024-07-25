import React, { useState } from 'react';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        setShowLogin(false);
    };

    const handleRegisterSuccess = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    return (
        <div className="App">
            {!isAuthenticated && !showRegister && !showLogin && (
                <div className="button-container">
                    <button onClick={() => setShowRegister(true)} style={styles.button}>Register</button>
                    <button onClick={() => setShowLogin(true)} style={styles.button}>Login</button>
                </div>
            )}
            {showRegister && (
                <div className="form-container">
                    <RegisterPage onSuccess={handleRegisterSuccess} />
                </div>
            )}
            {showLogin && (
                <div className="form-container">
                    <LoginPage onSuccess={handleLoginSuccess} />
                </div>
            )}
            {isAuthenticated && <TaskList />}
        </div>
    );
};

const styles = {
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '10px',
    },
};

export default App;










