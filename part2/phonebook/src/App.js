import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import axios from 'axios';

const Notification = ({message, error}) => {
  if (message === null) {
    return null;
  }

  if (error) {
    return (
      <div className="err">
        {message}
      </div>
    )
  }
  return (
    <div className="message">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setSearch] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState(false);

  const deletePersonById = (person) => {
    const thisPersonsId = person.id;
    window.confirm(`Delete ${person.name} ?`);
    const url = `http://localhost:3001/persons/${person.id}`;
    axios.delete(url)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      const nonDeletedPersons = persons.filter(personn => personn.id !== thisPersonsId)
      setPersons(nonDeletedPersons);
  }

  useEffect(() => {
    personService.getAll()
    .then(initialPersons => {
      setPersons(initialPersons);
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length > 0) {
      const searchPerson = persons.find(person => person.name === newName);
      window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`);
      const patchNumber = {name: newName, number: newNumber, id: searchPerson.id};
      axios.put(`http://localhost:3001/persons/${searchPerson.id}`, patchNumber)
            .then(response => {
              setPersons(persons.map(person => person.id !== searchPerson.id ? person: response.data))
              setErrorMessage(`${newNumber} was added to ${newName}.`);
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
            .catch(err => {
              setError(true);
              setErrorMessage(`information of ${newName} has already been removed from the server.`)
            })
              
      return;
    }
    const newPerson = {name: newName, number: newNumber};

    personService.create(newPerson)
    .then(returnedPerson => {
      const copyPersons = [...persons, newPerson];
      setPersons(copyPersons);
      setErrorMessage(`${newName} was added.`);
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNewName('');
      setNewNumber('');
    })
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
      <Notification message={errorMessage} error={error}/>
      <PersonForm addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} handlePhoneChange={handlePhoneChange} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons newSearch={newSearch} persons={persons} filteredPersons={filteredPersons} deletePersonById={deletePersonById}/>
    </div>
  )
}

export default App;
