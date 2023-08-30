import {createContext} from "react";
import { FormContextType } from "../interfaces/formInterface";

export const FormContext = createContext<FormContextType>({
    // Form 1 - Event
    event: "",
    setEvent: () => {},
    email: "",
    setEmail: () => {},
    location: "",
    setLocation: () => {},
    lat: 0,
    setLat: () => {},
    lng: 0,
    setLng: () => {},
    host: "",
    setHost: () => {},
    website: "",
    setWebsite: () => {},
    pwd: "",
    setPwd: () => {},
    matchPwd: "",
    setMatchPwd: () => {},
    // Form 1 - Business
    business: "",
    setBusiness: () => {},
    phone: "",
    setPhone: () => {},
    launchingDate: 0,
    setLauchingDate: () => {},
    // Form 2
    selectedImages: [],
    setSelectedImages: () => {},
    // Form 4
    accessibility1: true, 
    setAccessibility1: () => {},
    accessibility2: true, 
    setAccessibility2: () => {},
    accessibility3: true, 
    setAccessibility3: () => {},
    // Form 4 - Business
    selectedMenu: [],
    setSelectedMenu: () => {},
    // Form 3 - event
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
    // Form 3 - Business
    businessType: "",
    setBusinessType: ()=> {},
    priceRange: "",
    setPriceRange: () => {},
    subtype: "",
    setSubtype: () => {},
    cuisine: "",
    setCuisine: () => {},
    // Function
    handleBack: () => {},
    handleNext: () => {},
    currentPage: 1

});