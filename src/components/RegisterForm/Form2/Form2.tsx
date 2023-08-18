import {useParams} from "react-router-dom";
import "./Form2.scss";
// Component
import FormContainer from "../../Forms/FormContainer/FormContainer";
import Upload from "../../Forms/upload/Upload";
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

const Form2 = () => {
    // Type
    const {type} = useParams();

    const {handleBack, handleNext, selectedImages, setSelectedImages} = useContext(FormContext);
    
    return (
        <FormContainer name="Photos" handleBack={handleBack} handleNext={handleNext}>
            <div className="photo-form">
                <p className="photo-form__title">Please upload photos of your {type?.toLowerCase()} (Minimum 4 photos)</p>
                {/* React Drop Zone and Preview */}
                <Upload selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
            </div>
        </FormContainer>
    )
}

export default Form2
