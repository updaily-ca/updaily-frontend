import {useState} from 'react';
import "./Register.scss";
import {useNavigate} from "react-router-dom";
// Component
import NextButton from '../../components/global/NextButton/NextButton';
// Images
import business_icon from "../../asset/register/icons8-shop-64.png";
import event_icon from "../../asset/register/icons8-event-64.png";

const Register = () => {
    // Selected option
    const [selectedCategory, setSelectedCategory] = useState("");
    
    const navigate = useNavigate();

    // Handle Submit
    const handleSubmit = () : void => {
        // Check if the category is selected
        if(selectedCategory) {
            navigate(`/register/${selectedCategory}`)
        }
    }
    return (
        <main className="register">
            {/* Title */}
            <h1 className="register__title">We are super excited to have you as part of <span className="register__highlight">UpDaily.</span></h1>
            {/* Subtitle */}
            <p className="register__subtitle">Are you registering as a business or event?</p>
            {/* Containers to hold selections */}
            <div className="register__selections">
                {/* Register Business */}
                <div 
                    onClick={() => setSelectedCategory("Business")}
                    className={selectedCategory==="Business" ? "register__selection--active" : "register__selection"}
                >
                    <img src={business_icon} alt="Business Icon" className="selection__img"/>
                    <p className="selection__title">Business</p>
                </div>
                {/* Register Event */}
                <div 
                    onClick={() => setSelectedCategory("Event")}
                    className={selectedCategory==="Event" ? "register__selection--active" : "register__selection"}
                >
                    <img src={event_icon} alt="Event Icon" className="selection__img"/>
                    <p className="selection__title">Event</p>
                </div>
            </div>
            <NextButton handleNext={handleSubmit} text="Next" />
            {/* Login link */}
            <p className="register__login">Already have an account? <a href="#" className="register__highlight">Login</a></p>
        </main>
    )
}

export default Register
