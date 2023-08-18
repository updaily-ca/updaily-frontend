import { useParams } from "react-router-dom";
import "./Form4.scss";
import { useContext, ChangeEvent } from "react";
// Component
import FormContainer from "../../Forms/FormContainer/FormContainer";
import Upload from "../../Forms/upload/Upload";
// Context
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

const Form4 = () => {
    const {type} = useParams();
    const {handleBack, handleNext, accessibility1, setAccessibility1, accessibility2, setAccessibility2,accessibility3, setAccessibility3, selectedMenu,setSelectedMenu} = useContext(FormContext);

    // Handle change for accessibility questions
    const handleAccessibilityChange = (e: ChangeEvent<HTMLInputElement>, setStateFunction: (newValue: boolean) => void) => {
        const value = parseInt(e.target.value) === 1 ? true : false;
        setStateFunction(value);
    }
    return (
        <FormContainer name={type==="Event" ? "Accessibility" : "Menu"} handleBack={handleBack} handleNext={handleNext}>
            {
                type === "Event" && (
                    <div className="radio__form">
                        <div className="radio__form__group">
                            {/* Question 1 */}
                            <label>Are there wheelchair ramps or accessible entrance at the event venue?</label>
                            <div className="radio__form__input-container">
                                <div className="radio__form__input">
                                    <input 
                                        type="radio" 
                                        value={1} 
                                        name="accessibility1" 
                                        checked={accessibility1}
                                        onChange={(e) => handleAccessibilityChange(e, setAccessibility1)}
                                    /> Yes
                                </div>
                                <div className="radio__form__input">
                                    <input 
                                        type="radio" 
                                        value={0} 
                                        name="accessibility1" 
                                        checked={!accessibility1}
                                        onChange={(e) => handleAccessibilityChange(e, setAccessibility1)}
                                    /> No
                                </div>
                            </div>
                        </div>
                        {/* Question 2 */}
                        <div className="radio__form__group">
                            <label>Are there wheelchair ramps or accessible entrance at the event venue?</label>
                            <div className="radio__form__input-container">
                                <div className="radio__form__input">
                                    <input
                                        type="radio" 
                                        value={1} 
                                        name="accessibility2" 
                                        checked={accessibility2}
                                        onChange={(e) => handleAccessibilityChange(e, setAccessibility2)}
                                    /> Yes
                                </div>
                                <div className="radio__form__input">
                                    <input
                                        type="radio" 
                                        value={0} 
                                        name="accessibility2" 
                                        checked={!accessibility2}
                                        onChange={(e) => handleAccessibilityChange(e, setAccessibility2)}
                                    /> No
                                </div>
                            </div>
                        </div>
                        {/* Question 3 */}
                        <div className="radio__form__group">
                            <label>Are there wheelchair ramps or accessible entrance at the event venue?</label>
                            <div className="radio__form__input-container">
                                <div className="radio__form__input">
                                    <input
                                        type="radio" 
                                        value={1} 
                                        name="accessibility3" 
                                        checked={accessibility3}
                                        onChange={(e) => handleAccessibilityChange(e, setAccessibility3)}
                                    /> Yes
                                </div>
                                <div className="radio__form__input">
                                    <input
                                        type="radio" 
                                        value={0} 
                                        name="accessibility3" 
                                        checked={!accessibility3}
                                        onChange={(e) => handleAccessibilityChange(e, setAccessibility3)}
                                    /> No
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                type === "Business" && (
                    <div className="photo-form">
                        <p className="photo-form__title">Please upload photos of your {type?.toLowerCase()} (Minimum 4 photos)</p>
                        <Upload selectedImages={selectedMenu} setSelectedImages={setSelectedMenu} />
                    </div>
            )}
            
        </FormContainer>
    )
}

export default Form4
