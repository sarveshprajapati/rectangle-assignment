import React, { useState } from 'react'

const UseStateWithObject = () => {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    return (
        <form>
            <input
                type="text"
                value={name.firstname}
                // onChange={e => setName({ firstName: e.target.value })}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input
                type="text"
                value={name.lastname}
                // onChange={e => setName({ lastName: e.target.value })}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>{JSON.stringify(name)}</h2>
            <h2>{name.firstName}</h2>
            <h2>{name.lastName}</h2>
        </form>
    )
}

export default UseStateWithObject
