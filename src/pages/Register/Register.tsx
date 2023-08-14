import React from 'react';
import "./Register.scss";
// Component
import NextButton from '../../components/global/NextButton/NextButton';
// Images
import business_icon from "../../asset/register/icons8-shop-64.png";
import event_icon from "../../asset/register/icons8-event-64.png";

const Register = () => {

    const handleSubmit = () : void => {

    }
    return (
        <main className="register">
            {/* Title */}
            <h1 className="register__title">We are super excited to have you as part of <span>UpDaily</span></h1>
            {/* Subtitle */}
            <p className="register__subtitle">Are you registering as a business or event?</p>
            {/* Containers to hold selections */}
            <div className="register__selections">
                {/* Register Business */}
                <div className="register__selection">
                    <img src={business_icon} alt="Business Icon" className="selection__img"/>
                    <p className="selection__title">Business</p>
                </div>
                {/* Register Event */}
                <div className="register__selection">
                    <img src={event_icon} alt="Event Icon" className="selection__img"/>
                    <p className="selection__title">Event</p>
                </div>
            </div>
            <NextButton handleNext={handleSubmit} />
        </main>
    )
}

export default Register
