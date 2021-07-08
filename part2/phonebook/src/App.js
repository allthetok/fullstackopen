import React, {useState} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setSearch] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    const copyPersons = [...persons, {name: newName, phone: newNumber}];
    setPersons(copyPersons);
    setNewName('');
    setNewNumber('');
    };

  const handlePersonChange = (event) => {
    const personNames = persons.filter(person => person.name);
    if (personNames.includes(newName)) {
      setNewName('');
    }
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    const filtered = persons.filter((person) => 
    person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredPersons(filtered);
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} handleSearchChange={handleSearchChange} />
      <h2> add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons newSearch={newSearch} persons={persons} filteredPersons={filteredPersons} />
    </div>
  )
}

export default App;
