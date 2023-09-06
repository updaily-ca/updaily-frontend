import "./Input.scss";

interface InputProps {
    id: string,
    name: string,
    value: string | number,
    handleChange: (newValue: string) => void,
    type?: string,
    textarea?: string
}
const Input = ({id, name, value, handleChange, type, textarea}: InputProps) => {
    return (
        <div className="input">
            <label htmlFor={id} className="input__label">{name}</label>
            {
                textarea ? (
                    <textarea rows={5} className="input__input input__text-area" id={id} value={value} onChange={(e)=>handleChange(e.target.value)} />
                ) : (
                    <input type={type ? type : "text"} className="input__input" id={id} value={value} onChange={(e)=>handleChange(e.target.value)}/>
                )
            }
            
        </div>
    )
}

export default Input
