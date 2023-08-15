import React from 'react'
import FormContainer from '../FormContainer/FormContainer';


interface Form1Prop {
    handleNext: () => void
}
const Form1 = ({handleNext}: Form1Prop) => {
    return (
        <FormContainer name="General Information" handleNext={handleNext}>

        </FormContainer>
    )
}

export default Form1
