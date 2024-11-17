import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState('');
    const [s3Buckets, setS3Buckets] = useState([]);

    const fetchUsername = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/username');
            setUsername(response.data.username);
        } catch (error) {
            console.error("Error fetching username:", error);
        }
    };

    const fetchS3Buckets = async () => {
        try {
            const response = await axios.get('http://localhost:5002/api/s3-buckets');
            setS3Buckets(response.data.buckets);
        } catch (error) {
            console.error("Error fetching S3 buckets:", error);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={fetchUsername}>Get Username</button>
            {username && <p>Username: {username}</p>}

            <button onClick={fetchS3Buckets}>Fetch S3</button>
            {s3Buckets.length > 0 && (
                <ul>
                    {s3Buckets.map((bucket, index) => (
                        <li key={index}>{bucket}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;

