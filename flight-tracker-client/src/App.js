import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [flight, setFlight] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/api/flight?flight=${flight}`);
    setData(res.data);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Flight Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input 
          value={flight}
          onChange={e => setFlight(e.target.value)}
          placeholder="Enter Flight (e.g., AA100)"
        />
        <button type="submit">Track</button>
      </form>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;