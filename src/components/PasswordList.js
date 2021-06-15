import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import './styles/PasswordList.css'

import zxcvbn from 'zxcvbn'

function PasswordList() {
    const passwords = useSelector((state) => state.passwords)

    const passwordList = passwords.map((pass, index) => {
        const passData = zxcvbn(pass.password)
        return (
        <div key={index}>
            name:{pass.name} password: {pass.password} <br/>
            strength score: {passData.score} guesses: {passData.guesses}
        </div>)
        })
    return (
        <div className='passwordList'>
        {passwordList}
        </div>
    )
}

export default PasswordList
