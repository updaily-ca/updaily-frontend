export interface FormContextType {
    // Form 1 - Event
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
    // Form 1 - Business
    business: string,
    setBusiness: (newValue: string) => void,
    phone: string,
    setPhone: (newValue: string) => void,
    launchingDate: number,
    setLauchingDate: (newValue: number) => void,
    // Form 2
    selectedImages: File[],
    setSelectedImages: (img: any) => void,
    // Form 3 - Event
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
    // Form 3 - Business
    businessType: string,
    setBusinessType: (newValue: string) => void,
    priceRange: string,
    setPriceRange: (newValue: string) => void,
    subtype: string,
    setSubtype: (newValue: string) => void,
    cuisine: string, 
    setCuisine: (newValue: string) => void,
    // Form 4
    accessibility1: boolean,
    setAccessibility1: (newValue: boolean) => void,
    accessibility2: boolean,
    setAccessibility2: (newValue: boolean) => void,
    accessibility3: boolean,
    setAccessibility3: (newValue: boolean) => void,
    // Form 4 - Business
    selectedMenu: File[],
    setSelectedMenu: (img: any) => void,
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