import { useState } from 'react'
import { FormSection, FormLabel, ImagePreview, ImageUploadContainer, RemoveIcon } from './Styles/Form.styled';

const Images = () => {
    const [images, setImages] = useState([]);
    console.log("Images:", images);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };


  const removeImage = (indexToRemove) =>{
    setImages(images.filter((_, index) => index !== indexToRemove));
  };




  return (
    <>
        {/* Image Upload Section */}
        <FormSection>
        <FormLabel>Upload Images:</FormLabel>
        <input type='file' multiple accept='image/*' value={images} onChange={handleImageUpload} />
        </FormSection>


        {/* Display Uploaded Images */}
        <ImageUploadContainer>
            {images.map((image, index) => (
                <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                    <ImagePreview src={image} alt={`Uploaded ${index}`} />
                    <RemoveIcon onClick={() => removeImage(index)}>✖</RemoveIcon>
                </div>
            ))}
        </ImageUploadContainer>
    </>
    
  )
}

export default Images