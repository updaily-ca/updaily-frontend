import "./Input.scss";

interface InputProps {
    id: string,
    name: string,
    value: string | number
    handleChange: (newValue: string) => void
}
const Input = ({id, name, value, handleChange}: InputProps) => {
    return (
        <div className="input">
            <label htmlFor={id} className="input__label">{name}</label>
            <input className="input__input" id={id} value={value} onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    )
}

export default Input
