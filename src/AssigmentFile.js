import React, { useState } from 'react';
import './App.scss';

const Assignment = () => {
  const [inputcase, setInputcase] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [availableItems, setAvailableItems] = useState([
    { name: 'mayank', email: 'mayank@example.com' },
    { name: 'shivam', email: 'shivam@example.com' },
    { name: 'rohit', email: 'rohit@example.com' },
    { name: 'gaurav', email: 'gaurav@example.com' },
    { name: 'gunit', email: 'gunit@example.com' },
  ]);
  const [inputClicked, setInputClicked] = useState(false);

  const handleInputChange = (e) => {
    setInputcase(e.target.value);
  };

  const handleAddUser = (user) => {
    if (!selectedUsers.includes(user)) {
      setSelectedUsers([...selectedUsers, user]);
      setInputcase('');
      setInputClicked(true); // Show the suggestion list after adding a user
    }
  };

  const handleRemoveUser = (removedUser) => {
    setSelectedUsers(selectedUsers.filter((user) => user !== removedUser));
  };

  const handleInputClick = () => {
    setInputClicked(true);
  };

  return (
    <div className="Assignment-container">
      <h1 align="center" color="blue">Pick users</h1>
      <div className={`input-container ${selectedUsers.length > 0 ? 'input-with-chips' : ''}`}>
        {selectedUsers.map((user) => (
          <div key={user.email} className="chip">
            <span className="letter-icon">{user.name.charAt(0)}</span>
            <div className="user-info">
              <div>{user.name}</div>
            </div>
            <span className="remove-icon" onClick={() => handleRemoveUser(user)}>
             <p> x</p>
            </span>
          </div>
        ))}
        <input
          type="text"
          value={inputcase}
          onChange={handleInputChange}
          placeholder="Add new user"
          onClick={handleInputClick}
        />
      </div>
      {inputClicked && availableItems.length > 0 && (
        <ul className="suggestions">
          {availableItems
            .filter((item) => item.name.toLowerCase().includes(inputcase.toLowerCase()))
            .map((item) => (
              <li key={item.email} onClick={() => handleAddUser(item)}>
                <div className="user-info">
                 <span className="letter-icon">{item.name.charAt(0)}</span>
                  <div className="user-info1">{item.name}</div>
                  <div className="email">{item.email}</div>
                </div>
                
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Assignment;
