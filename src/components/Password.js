import React, { useState } from 'react'

function generatePassword(num) {
    console.log('generating password', Math.random())
    const min=33, max=126
    console.log('test', String.fromCharCode(Math.floor(Math.random()*(Math.floor(max)-Math.ceil(min)+1)+Math.ceil(min))))
    return Array(num).map(() => {
        return (String.fromCharCode(Math.floor(Math.random()*(Math.floor(max)-Math.ceil(min)+1)+Math.ceil(min))))
    }).join('')
}
function Password() {
    const [password, setPassword] = useState('p@$$w0rd')
    return (
        <div>
            <div>{password}</div>
            <div>
                <button onClick={e => {
                    setPassword(generatePassword(8))
                    console.log(password)
                }}>Generate</button>
            </div>
        </div>
    )
}

export default Password