// Component
import FormContainer from "../FormContainer/FormContainer"
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

const Form4 = () => {
    const {handleBack, handleNext} = useContext(FormContext);
    return (
        <FormContainer name="Accessibility" handleBack={handleBack} handleNext={handleNext}>
            
        </FormContainer>
    )
}

export default Form4
