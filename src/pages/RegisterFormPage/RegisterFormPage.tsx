import "./RegisterFormPage.scss";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
// Library
import {Line} from "rc-progress";
// Import Forms
import Form1 from "../../components/RegisterForm/Form1/Form1";
import Form2 from "../../components/RegisterForm/Form2/Form2";
import Form3 from "../../components/RegisterForm/Form3/Form3";
import Form4 from "../../components/RegisterForm/Form4/Form4";
import Form5 from "../../components/RegisterForm/Form5/Form5";
// Context
import { FormContext } from "../../context/formContext";
// Upload to cloudinary function
import { handleUpload } from "../../utils/functions";

const RegisterFormPage = () => {
    // type
    const {type} = useParams();
    // useNavgite
    const navigate = useNavigate();

    // States to keep track information of the form - event
    // Form 1 - Event
    const [event, setEvent] = useState("");
    const [email, setEmail] = useState("");
    const [host, setHost] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    // Form 1 - Business
    const [business, setBusiness] = useState("")
    const [phone, setPhone] = useState("");
    const [launchingDate, setLauchingDate] = useState(0);
    // Form 2
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagesURL, setImagesURL]: any[] = useState([]);
    // Form 3 - Event
    const [eventType, setEventType] = useState("");
    const[desc, setDesc] = useState("");
    const [admissionType, setAdmissionType] = useState("");
    const [admission, setAdmission] = useState("");
    const [dateRange, setDateRange] = useState([0,0]);
    const [timeRange, setTimeRange] = useState(["", ""]);
    // Form 3 - Business
    const [businessType, setBusinessType] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [subtype, setSubtype] = useState("");
    const [cuisine, setCuisine] = useState("");
    // Form 4 - Event
    const [accessibility1,setAccessibility1] = useState(true);
    const [accessibility2,setAccessibility2] = useState(true);
    const [accessibility3,setAccessibility3] = useState(true);
    // Form 4 - Business
    const [selectedMenu, setSelectedMenu] = useState([]);
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
    // handle business submit
    const handleBusinessSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // upload images to cloudinary
        await handleUpload(selectedImages, setImagesURL);

    }

    // handle event submit
    const handleEventSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
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
                {event, setEvent, email, setEmail, host, setHost, location,setLocation, website, setWebsite, handleBack, handleNext, pwd, setPwd, matchPwd, setMatchPwd, currentPage, accessibility1, setAccessibility1, accessibility2, setAccessibility2,accessibility3, setAccessibility3, desc, setDesc, admissionType, setAdmissionType, admission, setAdmission, eventType, setEventType, dateRange, setDateRange, timeRange, setTimeRange, selectedImages, setSelectedImages, launchingDate, setLauchingDate, phone, setPhone, business, setBusiness, businessType, setBusinessType, priceRange, setPriceRange, selectedMenu, setSelectedMenu, subtype, setSubtype, cuisine, setCuisine}
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
                {currentPage === 5 && <Form5  handleSubmit={type==="Business" ? handleBusinessSubmit : handleEventSubmit}/> }
            </FormContext.Provider>
        </div>
    )
}

export default RegisterFormPage
