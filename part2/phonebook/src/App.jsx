import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const handleClick = (event) => {
        event.preventDefault();
        if (persons.find(person => person.name === newName)){
            alert(`${newName} is already added to the phonebook`);
        }
        else{
            setPersons([...persons, { name: newName , number: newNumber}]);
            setNewName('');
        }

    }
    const handleNameChange = (event) => {
            setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
            setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
            setFilter(event.target.value)
    }

    const Form = () =>{
        return <div>

            <form>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleClick}>add</button>
                </div>
            </form>
        </div>
    }
    const Book = () =>{
        return <div>

            {persons.filter((f)=>(f.name.toLowerCase().includes(filter))).map((person, index) => (
                <p key={index}>{person.name} {person.number}</p>
            ))}
    </div>
    }
    const Filter = () => {
        return <div>
            <p>filter shown with <input value={filter} onChange={handleFilterChange}></input></p>

        </div>
    }

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter/>
            <h3>Add a new Contact</h3>
            <Form/>
            <h2>Numbers</h2>
            <Book/>
        </div>
    )
}

export default App
