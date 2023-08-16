// Component
import FormContainer from "../../Forms/FormContainer/FormContainer"
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';


const Form2 = () => {
    const {handleBack, handleNext} = useContext(FormContext);
    return (
        <FormContainer name="Photos" handleBack={handleBack} handleNext={handleNext}>
            
        </FormContainer>
    )
}

export default Form2
