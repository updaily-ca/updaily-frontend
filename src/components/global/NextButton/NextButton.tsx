import "./NextButton.scss";
// Define pass in function for Next Button
interface NextButtonFunc {
    handleNext: () => void;
}

const NextButton = ({handleNext}: NextButtonFunc) => {
    return (
        <button className="next-btn" onClick={handleNext}>Next</button>
    )
}

export default NextButton
