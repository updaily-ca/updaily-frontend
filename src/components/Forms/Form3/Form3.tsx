// Component
import FormContainer from "../FormContainer/FormContainer"
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

const Form3 = () => {
    const {handleBack, handleNext} = useContext(FormContext);
    return (
        <FormContainer name="Detail" handleBack={handleBack} handleNext={handleNext}>
            
        </FormContainer>
    )
}

export default Form3
