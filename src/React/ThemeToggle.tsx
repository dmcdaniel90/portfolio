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
    const [themeIcon, setThemeIcon] = useState(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        setThemeIcon(savedTheme === 'light' ? '☀️' : '🌙');
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setThemeIcon(newTheme === 'light' ? '☀️' : '🌙');
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} style={toggleStyles} className='fixed top-0 right-0 mt-8 mx-12 transition-all duration-300 ease-in-out'>
            {themeIcon}
        </button>
    );
};

export default ThemeToggle;
