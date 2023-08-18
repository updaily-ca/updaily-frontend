import {useParams} from "react-router-dom";
import "./Form2.scss";
// Component
import FormContainer from "../../Forms/FormContainer/FormContainer"
// Context
import { useContext } from "react";
import { FormContext } from '../../../pages/RegisterFormPage/RegisterFormPage';
// React Drop Zone
import {useDropzone} from "react-dropzone";
import {useState, useCallback} from "react";

const Form2 = () => {

    // Type
    const {type} = useParams();

    const {handleBack, handleNext, selectedImages, setSelectedImages} = useContext(FormContext);

    // React Dropzone
    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            setSelectedImages((prevState: any) => [...prevState, file]);
        });
    }, []);
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({onDrop});
    
    return (
        <FormContainer name="Photos" handleBack={handleBack} handleNext={handleNext}>
            <div className="photo-form">
                <p className="photo-form__title">Please upload photos of your {type?.toLowerCase()} (Minimum 4 photos)</p>
                {/* React Drop Zone and Preview */}
                <div className="container">
                    <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                        <p>Drop file(s) here ...</p>
                        ) : (
                        <p>Drag and drop file(s) here, or click to select files</p>
                        )}
                    </div>
                    <div className="images">
                        {selectedImages.length > 0 &&
                        selectedImages.map((image, index) => (
                            <img src={`${URL.createObjectURL(image)}`} key={index} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </FormContainer>
    )
}

export default Form2
