import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { name, phone }]);
      setName('');
      setPhone('');
    }
  };

  const removeContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Simple React App</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => setCounter(counter + 1)}>ADD ONE</button>
        <button onClick={() => setCounter(counter - 1)}>TAKE ONE</button>
        <button onClick={() => setCounter(0)}>CLEAR</button>
      </div>
      <div>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button onClick={addContact}>ADD A NEW CONTACT</button>
      </div>
      <div>
        <h3>Searched Term:</h3>
        <input
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {filteredContacts.map((contact, index) => (
          <div key={index} className="contact">
            <span>{contact.name} {contact.phone}</span>
            <button onClick={() => removeContact(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;