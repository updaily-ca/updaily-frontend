import "./SelectionInput.scss";

interface SelectionInputProps {
    id: string
    label: string
    values: string[]
}
const SelectionInput = ({id, label, values}: SelectionInputProps) => {
    return (
        <div className="selection-input">
            <label htmlFor={id} className="selection-input__label">{label}</label>
            <select name={id} id={id}>
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
