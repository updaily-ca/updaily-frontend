import "./RegisterFormPage.scss";
import {useParams, useNavigate} from "react-router-dom";
import {useState, createContext} from "react";
// Library
import {Line} from "rc-progress";
// Import Forms
import Form1 from "../../components/RegisterForm/Form1/Form1";
import Form2 from "../../components/RegisterForm/Form2/Form2";
import Form3 from "../../components/RegisterForm/Form3/Form3";
import Form4 from "../../components/RegisterForm/Form4/Form4";
import Form5 from "../../components/RegisterForm/Form5/Form5";


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
    // Form 3 
    eventType: string,
    setEventType: (newValue: string) => void,
    desc: string,
    setDesc: (newValue: string) => void, 
    admissionType: string,
    setAdmissionType: (newValue: string) => void,
    admission: string,
    setAdmission: (newValue: string) => void,
    dateRange: number[],
    setDateRange: (dates: number[]) => void,
    timeRange: string[],
    setTimeRange: (times: string[]) => void,
    // Form 4
    accessibility1: boolean,
    setAccessibility1: (newValue: boolean) => void,
    accessibility2: boolean,
    setAccessibility2: (newValue: boolean) => void,
    accessibility3: boolean,
    setAccessibility3: (newValue: boolean) => void,
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
// Form Context
export const FormContext = createContext<FormContextType>({
    // Form 1
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
    // Form 4
    accessibility1: true, 
    setAccessibility1: () => {},
    accessibility2: true, 
    setAccessibility2: () => {},
    accessibility3: true, 
    setAccessibility3: () => {},
    // Form 3
    eventType: "",
    setEventType: () => {},
    desc:"",
    setDesc: () => {},
    admissionType: "",
    setAdmissionType: () => {},
    admission: "",
    setAdmission: () => {},
    dateRange: [0,0],
    setDateRange: () => {},
    timeRange: ["",""],
    setTimeRange: () => {},
    // Function
    handleBack: () => {},
    handleNext: () => {},
    currentPage: 1

});

const RegisterFormPage = () => {
    // useNavgite
    const navigate = useNavigate();

    // States to keep track information of the form - event
    // Form 1 - Event
    const [event, setEvent] = useState("");
    const [email, setEmail] = useState("");
    const [host, setHost] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    // Form 4 - Event
    const [accessibility1,setAccessibility1] = useState(true);
    const [accessibility2,setAccessibility2] = useState(true);
    const [accessibility3,setAccessibility3] = useState(true);
    // Form 3 - Event
    const [eventType, setEventType] = useState("");
    const[desc, setDesc] = useState("");
    const [admissionType, setAdmissionType] = useState("");
    const [admission, setAdmission] = useState("");
    const [dateRange, setDateRange] = useState([0,0]);
    const [timeRange, setTimeRange] = useState(["", ""])
    // Form 5 - Event
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

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log(timeRange)
        console.log(dateRange)
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
                {event, setEvent, email, setEmail, host, setHost, location,setLocation, website, setWebsite, handleBack, handleNext, pwd, setPwd, matchPwd, setMatchPwd, currentPage, accessibility1, setAccessibility1, accessibility2, setAccessibility2,accessibility3, setAccessibility3, desc, setDesc, admissionType, setAdmissionType, admission, setAdmission, eventType, setEventType, dateRange, setDateRange, timeRange, setTimeRange}
            }  
            >
                {/* General Form */}
                {currentPage === 1 && <Form1/> }

                {/* Photo Form */}
                {currentPage === 2 && <Form2 /> }

                {/* Detail Form */}
                {currentPage === 3 && <Form3 /> }

                {/* Menu Form or Accessibility */}
                {currentPage === 4 && <Form4/> }

                {/* Set Up Account Form */}
                {currentPage === 5 && <Form5 handleSubmit={handleSubmit}/> }
            </FormContext.Provider>
        </div>
    )
}

export default RegisterFormPage
