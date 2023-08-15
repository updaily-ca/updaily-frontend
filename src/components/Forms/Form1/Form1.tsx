import React from 'react'
import "./Form1.scss"
// Component
import FormContainer from '../FormContainer/FormContainer';


interface Form1Prop {
    handleNext: () => void
}
const Form1 = ({handleNext}: Form1Prop) => {
    return (
        <FormContainer name="General Information" handleNext={handleNext}>
            <div className="form-children">
                
            </div>
        </FormContainer>
    )
}

export default Form1
