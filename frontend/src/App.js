import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const checkTitle = async () => {
        try {
            const response = await axios.post('http://localhost:5000/check-title', { title });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error checking title');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Title Verification System</h1>
            <input
                type="text"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={checkTitle}>Check Title</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default App;
