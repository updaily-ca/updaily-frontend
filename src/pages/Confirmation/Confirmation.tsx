import "./Confirmation.scss";

const Confirmation = () => {
    return (
        <div className="confirmation">
            <p className="confirmation__title">Thanks for registering with <span className="confirmation__highlight">UpDaily.</span></p>
            <p className="confirmation__content">Our team will review your submission within 24 hours. Once verified and complete, we will publish your business/event on UpDaily and send you a confirmation. If there is an error or missing information, we will notify you for more information through email and our portal.</p>
            <p className="confirmation__content">You can check the status of your registration by login to your account at www.updaily.ca/login</p>
        </div>
    )
}

export default Confirmation;