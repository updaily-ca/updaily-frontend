import { useContext, useEffect } from "react";
import "./Form1.scss";
import { useParams } from "react-router-dom";
// Component
import FormContainer from '../../Forms/FormContainer/FormContainer';
import Input from "../../Forms/Input/Input";
// Context
import { FormContext } from "../../../context/formContext";
// Date Picker
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
// to timestamp
import { toTimeStamp } from "../../../utils/functions";


import { Loader } from '@googlemaps/js-api-loader';


const Form1 = () => {
    // Type
    const { type } = useParams();

    const { event, setEvent, email, setEmail, host, setHost, location, setLocation, website, setWebsite, handleBack, handleNext, business, setBusiness, phone, setPhone, setLauchingDate } = useContext(FormContext);

    // Lauch Date
    const handleChange: DatePickerProps['onChange'] = (date, dateString) => {
        setLauchingDate(toTimeStamp(dateString));
    }


    const token = process.env.REACT_APP_API_KEY_1 || 'error';

    useEffect(() => {
        const loader = new Loader({
            apiKey: token,
            version: 'weekly',
            libraries: ['places'],
        });

        loader.load().then(() => {
            const input = document.getElementById("location");

            // Initialize Autocomplete service
            const autocomplete = new window.google.maps.places.Autocomplete(input, {
                types: ['establishment'],
                componentRestrictions: { country: 'CA' },
            });

            // Listen for place_changed event
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place && place.geometry && place.geometry.location) {
                    const { lat, lng } = place.geometry.location;
                    const coordinates = { latitude: lat(), longitude: lng() };
                    console.log(coordinates);
                    setLocation(place.formatted_address);
                }
            });
        });
    }, []);



    return (
        <FormContainer name="General Information" handleBack={handleBack} handleNext={handleNext}>
            <div className="form-children">
                {
                    type === "Event" ? (
                        <Input id="event" name="Event Name" value={event} handleChange={setEvent} />
                    ) : (
                        <Input id="business" name="Business Name" value={business} handleChange={setBusiness} />
                    )
                }
                <Input id="email" name="Email" value={email} handleChange={setEmail} />
                {
                    type === "Event" ? (
                        <Input id="host" name="Host by" value={host} handleChange={setHost} />
                    ) : (
                        <Input id="phone" name="Phone Number" value={phone} handleChange={setPhone} />
                    )
                }
                <Input id="location" name="Address" value={location} handleChange={setLocation} />
                {/* Business: when did your business launch? */}
                {
                    type === "Business" && (
                        <div className="input">
                            <label className="input__label">When did you business launch?</label>
                            <DatePicker format="MM/DD/YYYY" onChange={handleChange} />
                        </div>

                    )
                }
                {/* {type === "Business" && <Input />} */}
                <Input id="website" name="Official Website (Optional)" value={website} handleChange={setWebsite} />
            </div>
        </FormContainer>
    )
}

export default Form1
