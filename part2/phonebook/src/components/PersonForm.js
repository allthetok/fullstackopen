import React from 'react';

const PersonForm = ({addPerson, newName, handlePersonChange, handlePhoneChange, newNumber}) => {
    return (
    <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
}

export default PersonForm;