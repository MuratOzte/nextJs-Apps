'use client';
import classes from './imagePicker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const filePickerRef = useRef();
    const [pickedImage, setPickedImage] = useState();

    const handlePickImage = () => {
        filePickerRef.current.click();
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>Please pick an image.</p>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="Preview" fill />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    name={name}
                    accept="image/png,image/jpeg,image/webp"
                    id={name}
                    ref={filePickerRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    type="button"
                    className={classes.button}
                    onClick={handlePickImage}
                >
                    Pick Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
