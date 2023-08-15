import { useContext } from "react";
import "./Form1.scss"
// Component
import FormContainer from '../FormContainer/FormContainer';
import Input from "../Input/Input";
// Context
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

interface Form1Prop {
    handleNext: () => void
}

const Form1 = ({handleNext}: Form1Prop) => {
    const form = useContext(FormContext);
    
    return (
        <FormContainer name="General Information" handleNext={handleNext}>
            <div className="form-children">
                
            </div>
        </FormContainer>
    )
}

export default Form1
