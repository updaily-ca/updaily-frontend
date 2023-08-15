import React from 'react'

interface InputProps {
    id: string,
    name: string,
    value: string | number | undefined,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({name, id, value, handleChange}: InputProps) => {
    return (
        <div className="input">
            <label htmlFor={id} className="input__label">{name}</label>
            <input 
                id={id} 
                type="text" 
                className="input__input" 
                value={value}
                onChange={(e)=>handleChange(e)}
            />
        </div>
    )
}

export default Input
