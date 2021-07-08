import React from 'react';
import Person from './Person';

const Persons = ({newSearch, persons, filteredPersons}) => {
    return (
        <ul>
        {
          newSearch === ""
          ? persons.map(person => <Person key={person.name} person={person} />)
          : filteredPersons.map(person => <Person key={person.name} person={person} />)
        }
      </ul>
    )
};

export default Persons;