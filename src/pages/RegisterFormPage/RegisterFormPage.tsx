import "./RegisterFormPage.scss";
import {useParams} from "react-router-dom";
import {useState} from "react";
// Component
import NextButton from "../../components/global/NextButton/NextButton";
// Import Forms
import Form1 from "../../components/Forms/Form1/Form1";
import Form2 from "../../components/Forms/Form2/Form2";
import Form3 from "../../components/Forms/Form3/Form3";
import Form4 from "../../components/Forms/Form4/Form4";
import Form5 from "../../components/Forms/Form5/Form5";

const RegisterFormPage = () => {
    // Event or business type from param
    const {type} = useParams();

    // State to keep track of current page
    const [currentPage, setCurrentPage] = useState(1);
    
    // Handle next
    const handleNext = (): void => {
        setCurrentPage(currentPage+1);
    }
    return (
        <div className="register-form">
            {/* Title */}
            <h1 className="register-form__title">Let's get you set up in a few steps!</h1>
            {/* Progress Bar */}
            {/* Submission Form */}
            {currentPage === 1 && <Form1 /> }
            {currentPage === 2 && <Form2 /> }
            {currentPage === 3 && <Form3 /> }
            {currentPage === 4 && <Form4 /> }
            {currentPage === 5 && <Form5 /> }
            {/* Next Button */}
            <NextButton handleNext={handleNext} />
        </div>
    )
}

export default RegisterFormPage
