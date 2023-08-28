import { useContext, useEffect, useState } from "react";
import "./Form1.scss";
import { useParams } from "react-router-dom";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { toTimeStamp } from "../../../utils/functions";
import Input from "../../Forms/Input/Input";
import FormContainer from "../../Forms/FormContainer/FormContainer";
import { FormContext } from "../../../context/formContext";
import useGoogleMaps from "../../../App";

const Form1 = () => {
    const googleMaps = useGoogleMaps();
    const { type } = useParams();

    const {
        event,
        setEvent,
        email,
        setEmail,
        host,
        setHost,
        location,
        setLocation,
        website,
        setWebsite,
        handleBack,
        handleNext,
        business,
        setBusiness,
        phone,
        setPhone,
        setLauchingDate,
        lat,
        lng,
        setLat,
        setLng,
    } = useContext(FormContext);

    const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
        setLauchingDate(toTimeStamp(dateString));
    };

    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        if (googleMaps) {
            const input = document.getElementById("location");

            if (window.google && window.google.maps && window.google.maps.places) {

                const map = window.google.maps.places;

                const autocomplete = new map.Autocomplete(input, {
                    types: ["address"],
                    componentRestrictions: { country: "CA" },
                });

                autocomplete.addListener("place_changed", () => {
                    const place = autocomplete.getPlace();
                    if (place && place.geometry && place.geometry.location) {
                        const { lat, lng } = place.geometry.location;
                        const coordinates = { latitude: lat(), longitude: lng() };
                        setLocation(place.formatted_address);
                        setLat(coordinates.latitude);
                        setLng(coordinates.longitude);
                    }
                });
            }

            setApiLoaded(true);
        }
    }, [googleMaps]);

    if (!apiLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <FormContainer
            name="General Information"
            handleBack={handleBack}
            handleNext={handleNext}
        >
            <div className="form-children">
                {type === "Event" ? (
                    <Input id="event" name="Event Name" value={event} handleChange={setEvent} />
                ) : (
                    <Input
                        id="business"
                        name="Business Name"
                        value={business}
                        handleChange={setBusiness}
                    />
                )}
                <Input id="email" name="Email" value={email} handleChange={setEmail} />
                {type === "Event" ? (
                    <Input id="host" name="Host by" value={host} handleChange={setHost} />
                ) : (
                    <Input
                        id="phone"
                        name="Phone Number"
                        value={phone}
                        handleChange={setPhone}
                    />
                )}
                <Input id="location" name="Address" value={location} handleChange={setLocation} />
                {type === "Business" && (
                    <div className="input">
                        <label className="input__label">When did your business launch?</label>
                        <DatePicker format="MM/DD/YYYY" onChange={handleChange} />
                    </div>
                )}
                <Input
                    id="website"
                    name="Official Website (Optional)"
                    value={website}
                    handleChange={setWebsite}
                />
            </div>
        </FormContainer>
    );
};

export default Form1;
