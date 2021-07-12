import React from 'react';

const Person = ({person, deletePersonById}) => {
    return (
        <li> 
            {person.name} {person.number}
            <button onClick={() => deletePersonById(person)}>delete</button>
        </li>
    );

}

export default Person;