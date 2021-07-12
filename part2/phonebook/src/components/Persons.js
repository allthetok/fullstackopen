import React from 'react';
import Person from './Person';

const Persons = ({newSearch, persons, filteredPersons, deletePersonById}) => {
    return (
        <ul>
        {
          newSearch === ""
          ? persons.map(person => <Person key={person.id} person={person} deletePersonById={deletePersonById} />)
          : filteredPersons.map(person => <Person key={person.id} person={person} deletePersonById={deletePersonById} />)
        }
      </ul>
    )
};

export default Persons;