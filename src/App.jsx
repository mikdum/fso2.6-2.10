import Persons from "./Persons"
import PersonForm from "./PersonForm"
import Filter from "./Filter"
import {use, useState} from "react"
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filter, setFilter]=useState('')
  var filteredPersons=persons
  if (filter.length>0)
    filteredPersons=persons.filter(x=>x.name.includes(filter))

  return (

    <div>
    <h2>Phonebook</h2>
    <Filter filter={filter} setFilter={setFilter}/>
    <h3>Add a new</h3>
    <PersonForm  persons={persons} setPersons={setPersons}/>
    <h3>Numbers</h3>
    {filteredPersons.map(x=><Persons key={x.name} person={x} />)}
    </div>
 
  )
}
export default App