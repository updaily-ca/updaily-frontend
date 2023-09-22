import "./Upload.scss";
// Icon
import delete_icon from "../../../asset/register/icons8-delete-60 (2).png"
// React Drop Zone
import {useDropzone} from "react-dropzone";
import {useCallback} from "react";

interface UploadProps {
    selectedImages: File[],
    setSelectedImages: (img: any) => void
}

const Upload = ({selectedImages, setSelectedImages} : UploadProps) => {
    // React Dropzone
    const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            setSelectedImages((prevState: any) => [...prevState, file]);
        });
    }, []);
    // Remove an image
    const removeImage = (index: number) => {
        setSelectedImages((prevImages: any) => {
            const updateImage = [...prevImages];
            updateImage.splice(index, 1);
            return updateImage;
        })
    }
    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({onDrop});
    return (
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
                    <div key={index} className="images__preview">
                        <img className="images__img" src={`${URL.createObjectURL(image)}`}  alt="" />
                        <div className="images__delete-container">
                            <img onClick={() => removeImage(index)} src={delete_icon} className="images__delete-icon" alt="Delete"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Upload
