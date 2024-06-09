import React, { useEffect, useState } from 'react';
import { getGreetings } from '../services/api';

const GreetingDisplay = () => {
    const [greetings, setGreetings] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGreetings = async () => {
            try {
                const data = await getGreetings();
                setGreetings(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchGreetings();
    }, []);

    return (
        <div>
            <h1>Greeting Display</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <p>Message: {greetings.message}</p>
                    <p>Age: {greetings.age}</p>
                </div>
            )}
        </div>
    );
};

export default GreetingDisplay;
