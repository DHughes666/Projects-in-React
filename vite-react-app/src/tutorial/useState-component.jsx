import { useState } from 'react';
import { peopleData } from '../data';

const UseStateBasics = () => {
    const [people, setPeople] = useState(peopleData);
    const [show, setShow] = useState(false);

    const clearPeople = () => {
        setPeople([]);
    }

    const removePerson = (id) => {
        setPeople(people.filter(person => person.id !== id));
    }

    const showPerson = (id) => {
        setShow(true);
        setPeople(people.filter(person => person.id === id));
    }
    
  return (
    <div>
        {people.map((person) => {
            const {id, name, hobby} = person
            let personContent;
            if (show) {
                personContent = (
                    <div>
                        <h2>I am {name}</h2>
                        <h4>I enjoy {hobby}</h4>
                    </div>
                )
            } else {
                null
            }
            return (
                <div key={id}>
                    {personContent}
                    <button type='button' 
                    onClick={() => showPerson(id)}
                    >Show {name}</button>
                </div>
            )
        })}
        <button className='btn' onClick={clearPeople}>Clear people</button>
    </div>
  )
};

export default UseStateBasics;
