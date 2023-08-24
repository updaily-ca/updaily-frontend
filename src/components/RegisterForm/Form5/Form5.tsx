import {useContext} from 'react'
// Component
import FormContainer from '../../Forms/FormContainer/FormContainer';
import Input from "../../Forms/Input/Input";
// Context
import { FormContext } from '../../../context/formContext';

interface Form5Props {
    handleSubmit: (e: React.FormEvent)=> void,
}
const Form5 = ({handleSubmit}: Form5Props) => {
    const {pwd, setPwd, matchPwd, setMatchPwd, handleBack} = useContext(FormContext);
    return (
        <FormContainer name="Set up an account" handleBack={handleBack} handleSubmit={handleSubmit}>
            <div className="form-children">
                    <Input id="pwd" name="Password" value={pwd} handleChange={setPwd} />
                    <Input id="confirmPwd" name="Confirm Password" value={matchPwd} handleChange={setMatchPwd} />
            </div>
        </FormContainer>
    )
}

export default Form5
