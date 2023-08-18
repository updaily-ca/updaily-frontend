import {useParams} from "react-router-dom";
import "./Form3.scss";
import {DatePicker, Space} from "antd";
import {TimePicker} from "antd";
// function
import { toTimeStamp } from "../../../utils/functions";
// Component
import FormContainer from "../../Forms/FormContainer/FormContainer";
import SelectionInput from "../../Forms/SelectionInput/SelectionInput";
import Input from "../../Forms/Input/Input";
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';
// Data
import { eventType as eventLists } from "../../../utils/FormData";
import { businessType } from "../../../utils/FormData";
import { priceRange } from "../../../utils/FormData";
import { admission as admissionData } from "../../../utils/FormData";
import {times} from "../../../utils/FormData";

// Date Picker Component from Ant Design
const {RangePicker} = DatePicker;

const Form3 = () => {
    // Type: Event or Business
    const {type} = useParams();

    // Use Form Context
    const {desc, setDesc, admissionType, setAdmissionType, admission, setAdmission, eventType, setEventType, setDateRange, setTimeRange} = useContext(FormContext);

    const {handleBack, handleNext} = useContext(FormContext);

    // handle change 
    const handleDateChange = (dates: any): void => {
        const start = toTimeStamp(`${dates[0].$M + 1}/${dates[0].$D}/${dates[0].$y}`);
        const end = toTimeStamp(`${dates[1].$M + 1}/${dates[1].$D}/${dates[1].$y}`);
        setDateRange([start, end]);
    }
    const handleTimeChange = (times: any): void => {
        const start = `${times[0].$H}:${times[0].$m}`;
        const end = `${times[1].$H}:${times[1].$m}`;
        setTimeRange([start, end]);
    }
    return (
        <FormContainer name="Detail" handleBack={handleBack} handleNext={handleNext}>
            <div className="detail-form">
                {/* Event type */}
                {type==="Event" && <SelectionInput id="type" label="Event Type" values={eventLists} value={eventType} handleChange={setEventType} />}
                {type==="Event" && <SelectionInput id="admission" label="Admission fee" values={admissionData} value={admissionType} handleChange={setAdmissionType} />}
                {type==="Event" && <Input id="price" name="Price" value={admission} handleChange={setAdmission}/>}
                {
                    type==="Event" && (
                        <div className="detail-form__container">
                            <p className="detail-form__title">Date and Time</p>
                            <div className="detail-form__date-time">
                                <Space direction="vertical" size={100}>
                                    <RangePicker onChange={handleDateChange} />
                                </Space>
                                <TimePicker.RangePicker use12Hours={true} format="HH:mm" onChange={handleTimeChange} />
                            </div>
                        </div>
                        
                    )
                }
                {/* Business type */}
                {/* {type==="Business" && <SelectionInput id="type" label="Business Type" values={businessType} />}
                {type==="Business" && <SelectionInput id="pricerange" label="Price Range" values={priceRange} />} */}
                {/* Description */}
                <Input id="desc" name={`A short description about your ${type?.toLowerCase()}`} value={desc} handleChange={setDesc}/>
            </div>
        </FormContainer>
    )
}

export default Form3
