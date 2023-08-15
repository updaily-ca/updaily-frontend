import "./RegisterFormPage.scss";
import {useParams, useNavigate} from "react-router-dom";
import {useState, createContext} from "react";
// Library
import {Line} from "rc-progress";
// Component
import NextButton from "../../components/global/NextButton/NextButton";
// Import Forms
import Form1 from "../../components/Forms/Form1/Form1";
import Form2 from "../../components/Forms/Form2/Form2";
import Form3 from "../../components/Forms/Form3/Form3";
import Form4 from "../../components/Forms/Form4/Form4";
import Form5 from "../../components/Forms/Form5/Form5";


// Interface to define context
interface FormContextType {
    // Form 1
    event: string,
    setEvent: (newValue: string) => void,
    email: string,
    setEmail: (newValue: string) => void,
    host: string,
    setHost: (newValue: string) => void,
    location: string, 
    setLocation: (newValue: string) => void,
    website: string,
    setWebsite: (newValue: string) => void,
    // Form 5
    pwd: string,
    setPwd: (newValue: string) => void,
    matchPwd: string,
    setMatchPwd: (newValue: string) => void,
    handleBack: () => void,
    handleNext: () => void,
    // Current Page
    currentPage: number
}

export const FormContext = createContext<FormContextType>({
    event: "",
    setEvent: () => {},
    email: "",
    setEmail: () => {},
    location: "",
    setLocation: () => {},
    host: "",
    setHost: () => {},
    website: "",
    setWebsite: () => {},
    pwd: "",
    setPwd: () => {},
    matchPwd: "",
    setMatchPwd: () => {},
    handleBack: () => {},
    handleNext: () => {},
    currentPage: 1

});

const RegisterFormPage = () => {
    // useNavgite
    const navigate = useNavigate();
 
    // Event or business type from param
    const {type} = useParams();

    // States to keep track information of the form - event
    // Form 1
    const [event, setEvent] = useState("");
    const [email, setEmail] = useState("");
    const [host, setHost] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    // Form5
    const [pwd, setPwd] = useState("");
    const [matchPwd, setMatchPwd] = useState("");

    // State to keep track of current page
    const [currentPage, setCurrentPage] = useState(1);
    
    // Handle next
    const handleNext = (): void => {
        setCurrentPage(currentPage+1);
    }

    // Handle back 
    const handleBack = (): void => {

        // Skip form 4 if it is event type
        if(currentPage !== 1) {
            setCurrentPage(currentPage-1);
        } else {
            navigate(-1);
        }
    }

    const handleSubmit = (): void => {

    }
    return (
        <div className="register-form">
            <div className="register-form__header">
                {/* Title */}
                <h1 className="register-form__title">Let's get you set up in a few steps!</h1>
                {/* Progress Bar */}
                <Line className="progress-bar" 
                    percent={currentPage*20} 
                    strokeWidth={3}  
                    trailWidth={3} 
                    strokeColor="#FF3125"
                />
            </div>
            
            {/* Submission Form */}
            <FormContext.Provider value={
                {event, setEvent, email, setEmail, host, setHost, location,setLocation, website, setWebsite, handleBack, handleNext, pwd, setPwd, matchPwd, setMatchPwd, currentPage}
            }  
            >
                {/* General Form */}
                {currentPage === 1 && <Form1/> }

                {/* Photo Form */}
                {currentPage === 2 && <Form2 /> }

                {/* Detail Form */}
                {currentPage === 3 && <Form3 /> }

                {/* Menu Form */}
                {currentPage === 4 && <Form4 /> }

                {/* Set Up Account Form */}
                {currentPage === 5 && <Form5 handleSubmit={handleSubmit} /> }
            </FormContext.Provider>
        </div>
    )
}

export default RegisterFormPage
