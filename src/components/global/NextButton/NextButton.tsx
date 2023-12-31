import "./NextButton.scss";
// Define pass in function for Next Button
interface NextButtonFunc {
    handleNext?: (e: React.FormEvent) => void;
    text: string
}

const NextButton = ({handleNext, text}: NextButtonFunc) => {
    return (
        <button className="next-btn" onClick={handleNext}>{text}</button>
    )
}

export default NextButton
