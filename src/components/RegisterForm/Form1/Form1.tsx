import { useContext } from "react";
import "./Form1.scss"
// Component
import FormContainer from '../../Forms/FormContainer/FormContainer';
import Input from "../../Forms/Input/Input";
// Context
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';


const Form1 = () => {
    const {event, setEvent, email, setEmail, host, setHost, location, setLocation, website, setWebsite, handleBack, handleNext} = useContext(FormContext);

    return (
        <FormContainer name="General Information" handleBack={handleBack} handleNext={handleNext}>
            <div className="form-children">
                    <Input id="event" name="Event Name" value={event} handleChange={setEvent} />
                    <Input id="email" name="Email" value={email} handleChange={setEmail} />
                    <Input id="host" name="Host by" value={host} handleChange={setHost} />
                    <Input id="location" name="Location" value={location} handleChange={setLocation} />
                    <Input id="website" name="Website" value={website} handleChange={setWebsite} />
            </div>
        </FormContainer>
    )
}

export default Form1
