import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
    const [formData, setFormData] = useState({
        name: '-',
        job: '-'
    });

    const handleSubmit = () => {
        const name = document.querySelector('input[name="name"]').value;
        const job = document.querySelector('input[name="job"]').value;
        setFormData({ name, job });
    }

    return (
        <div className="container mt-3">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" />
            </div>
            <div>
                <label htmlFor="job">Job</label>
                <input type="text" name="job" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
            <div>
                <h3 className="mt-3">Hi, my name is {formData.name}</h3>
                <p className="mt-3">My job is {formData.job}</p>
            </div>
        </div>
    );
}

root.render(<App />);