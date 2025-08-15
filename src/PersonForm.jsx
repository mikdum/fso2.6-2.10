import { useState } from "react"

const PersonForm = ({ persons, setPersons }) => {

    const [newPesron, setNewPerson] = useState({ 'name': '', 'number': '' })
    const addNote = (event) => {
        event.preventDefault()
        
        if (persons.filter(x=>x.name===newPesron.name).length>0)
        {alert(`${newPesron.name} is already added to phonebook`)}
            else {

                setNewPerson({ 'name': '', 'number': '' })
                setPersons(persons.concat(newPesron))
            }
    }

    const handleNoteChange = (event) => {

        if (event.target.name === "name") setNewPerson({ 'name': event.target.value, 'number': newPesron.number })
        else setNewPerson({ 'name': newPesron.name, 'number': event.target.value })

    }


    return (<>
        <form onSubmit={addNote}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <label htmlFor="name">name: </label>
                    <input name='name'
                        value={newPesron.name}
                        onChange={handleNoteChange}
                    />

                </div>
                <div>
                    <label htmlFor="number">number: </label>

                    <input name="number"
                        value={newPesron.number}
                        onChange={handleNoteChange}
                    />
                </div>

            </div>
            <button type="submit" disabled ={newPesron.number===''||newPesron.name===''}>save</button>
        </form>

    </>)
}

export default PersonForm