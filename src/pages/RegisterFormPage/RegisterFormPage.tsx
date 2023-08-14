import {useParams} from "react-router-dom";

const RegisterFormPage = () => {
    const {type} = useParams();
    console.log(type);
    return (
        <div>
            Register Form
        </div>
    )
}

export default RegisterFormPage
