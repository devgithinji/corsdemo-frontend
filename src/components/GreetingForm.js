import React, { useState } from 'react';
import { sendGreeting } from '../services/api';

const GreetingForm = () => {
    const [message, setMessage] = useState('');
    const [person, setPerson] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await sendGreeting({ message, person });
            setResponse(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };

    return (
        <div>
            <h1>Send a Greeting</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Message: </label>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Person: </label>
                    <input
                        type="text"
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            {error && <p>Error: {error}</p>}
            {response && (
                <div>
                    <p>Message: {response.message}</p>
                    <p>Person: {response.person}</p>
                </div>
            )}
        </div>
    );
};

export default GreetingForm;
