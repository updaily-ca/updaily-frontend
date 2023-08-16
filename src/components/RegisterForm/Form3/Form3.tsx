// Component
import FormContainer from "../../Forms/FormContainer/FormContainer";
import SelectionInput from "../../Forms/SelectionInput/SelectionInput";
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

const Form3 = () => {
    const {handleBack, handleNext} = useContext(FormContext);


    const values = ["Featival", "Food", "Outdoor", "Concert"]
    return (
        <FormContainer name="Detail" handleBack={handleBack} handleNext={handleNext}>
            <div className="detail-form">
                <SelectionInput id="type" label="Event Type" values={values} />
            </div>
        </FormContainer>
    )
}

export default Form3
