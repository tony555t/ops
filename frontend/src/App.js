import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

function App() {
  
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  // Fetch users when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/users').then(res => setUsers(res.data));
  }, []); 

  // Add a new user via the API
  const addUser = async () => {
    const res = await axios.post('http://localhost:3000/users', { name }); // Post new user
    setUsers([...users, res.data]); // Update users list
    setName(''); // Clear input field
  };

  return (
    <div>
      <h1>Users</h1>
      {/* Input for new user name */}
      <input value={name} onChange={e => setName(e.target.value)} />
      {/* Button to add user */}
      <button onClick={addUser}>Add User</button>
      {/* List all users */}
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}

export default App; // Export the component