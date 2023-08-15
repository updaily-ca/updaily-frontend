import { useContext } from "react";
import "./Form1.scss"
// Component
import FormContainer from '../FormContainer/FormContainer';
import Input from "../Input/Input";
// Context
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';

interface Form1Prop {
    handleNext: () => void
}

const Form1 = ({handleNext}: Form1Prop) => {
    const {event, setEvent, email, setEmail, host, setHost, location, setLocation, website, setWebsite} = useContext(FormContext);

    return (
        <FormContainer name="General Information" handleNext={handleNext}>
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
