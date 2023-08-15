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

const FormContainer = ({handleSubmit, children, handleNext, handleBack, name}: FormContainerProps) => {
    return (
        <form onSubmit={handleSubmit}>
            {/* Header of Form */}
            <div className="form__header">
                <img onClick={handleBack} className="form__back-icon" src={back_icon} alt="Back Button"/>
                <p className="form__name">{name}</p>
            </div>
            {children}
            {/* Next Button */}
            {/* <NextButton text="Next" handleNext={handleNext} /> */}
        </form>
    )
}

export default FormContainer
