import React from 'react';
import Person from './Person';

const Persons = ({newSearch, persons, filteredPersons}) => {
    return (
        <ul>
        {
          newSearch === ""
          ? persons.map(person => <Person key={person.id} person={person} />)
          : filteredPersons.map(person => <Person key={person.id} person={person} />)
        }
      </ul>
    )
};

export default Persons;