import { useParams } from "react-router-dom";
// Component
import FormContainer from "../FormContainer/FormContainer"
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

const Form4 = () => {
    const {type} = useParams();
    const {handleBack, handleNext} = useContext(FormContext);
    return (
        <FormContainer name="Accessibility" handleBack={handleBack} handleNext={handleNext}>
            {
                type === "Event" && (
                    <div className="radio__form-group">
                        <label>Are there wheelchair ramps or accessible entrance at the event venue?</label>
                        <div>
                            <input type="radio" value="yes" name="accessibility1" /> Yes
                            <input type="radio" value="false" name="accessibility1" /> No
                        </div>
                    </div>
                    
                )
            }
            {
                type === "Business" && <p>Business Form</p>
            }
        </FormContainer>
    )
}

export default Form4
