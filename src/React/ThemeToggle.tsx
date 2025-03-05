// ThemeToggle.jsx
import React, { useEffect, useState } from 'react';

const toggleStyles = {
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'var(--primary-color)',
};
const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} style={toggleStyles}>
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;
