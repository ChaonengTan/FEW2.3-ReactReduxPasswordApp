import React, { useState } from 'react'

function generatePassword(num) {
    return (Array(num).fill(0).map(() => {
        return String.fromCharCode(Math.floor(Math.random()*92+33))
    }).join(''))
}
function Password() {
    const [password, setPassword] = useState('p@$$w0rd')
    return (
        <div>
            <div>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div>
                <button onClick={e => {
                    setPassword(generatePassword(8))
                }}>Generate</button>
            </div>
        </div>
    )
}

export default Password