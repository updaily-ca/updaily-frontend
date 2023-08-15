import {ReactNode} from "react";
import "./FormContainer.scss";
// Icon
import back_icon from "../../../asset/register/icons8-back-arrow-48.png";
// Component
import NextButton from "../../global/NextButton/NextButton";

interface FormContainerProps {
    handleSubmit?: () => void,
    handleNext?: () => void,
    handleBack?: () => void,
    children:ReactNode,
    name: string
}

const FormContainer = ({handleSubmit, handleNext, children, handleBack, name}: FormContainerProps) => {
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {/* Header of Form */}
            <div className="form-container__header">
                <img onClick={handleBack} className="form-container__back-icon" src={back_icon} alt="Back Button"/>
                <p className="form-container__name">{name}</p>
            </div>
            {children}
            {/* Next Button */}
            <NextButton text="Next" handleNext={handleNext} />
        </form>
    )
}

export default FormContainer
