import "./SelectionInput.scss";

interface SelectionInputProps {
    id: string
    label: string
    values: string[]
    handleChange: (newValue: string) => void
    value: string
}
const SelectionInput = ({id, label, values, handleChange, value}: SelectionInputProps) => {
    return (
        <div className="selection-input">
            <label htmlFor={id} className="selection-input__label">{label}</label>
            <select value={value} onChange={(e) => handleChange(e.target.value)} className="selection-input__select" name={id} id={id}>
                {/* Render options */}
                {
                    values.map((value) => {
                        return <option value={value}>{value}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectionInput
