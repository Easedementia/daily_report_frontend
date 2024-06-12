import styled from 'styled-components';


export const PageContainer = styled.div`
    background-color: #5f005f;
    padding: 20px;
    margin-top: 90px;
    width: 100%;
    box-sizing: border-box;

`


export const ContentContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;


    @media (max-width: 760px) {
        padding: 10px;
    }
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 10px;
    }
`


export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`


export const Label = styled.div`
    margin-right: 10px;
    font-size: 16px;
    min-width: 200px;
    text-align: left;
    font-family: 'poppins';

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 5px;
        min-width: unset;
    }
`


export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #000;
    width: 100%;
    font-size: 16px;
    outline: none;
    padding: 5px;

    @media (max-width: 768px) {
        width: 100%;
    }
`


export const Spacer = styled.div`
    height: 20px;
`


export const Logo = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 170px;

    @media (max-width: 768px) {
        width: 100px;
        top: 10px;
        right: 10px;
    }
`


export const FormContainer = styled.div`
    border: 1px solid #000;
    padding: 10px;
    width: 100%;
    margin: 20px 0;
    border-radius: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 5px;
        margin: 10px auto;
    }
`


export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`


export const FormSection = styled.div`
    margin: 10px 0;
    width: 100%;

    @media (max-width: 768px) {
        margin: 5px 0;
    }
`


export const FormLabel = styled.div`
    font-weight: normal;
    margin-bottom: 5px;
    text-align: left;
    font-family: 'poppins';

    @media (max-width: 768px) {
        margin-bottom: 2px;
    }
`


export const FormTextArea = styled.textarea`
  width: 95%;
  border: 1px solid #000;
  resize: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 1.5;
  white-space: pre-wrap;
  font-family: Arial, Helvetica, sans-serif;
  transition: height 0.2s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export const ImageUploadContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    justify-content: center;
`;




export const ImagePreview = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid #000;
    border-radius: 5px;

    @media (max-width: 760px) {
        width: 80px;
        height: 80px;
    }
`


export const RemoveIcon = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    cursor: pointer;
    padding: 2px 5px;
    font-size: 12px;
    color: black;
`


export const DownloadButton = styled.button`
    background-color: purple;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover{
        background-color: darkviolet;
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 12px;
    }
`
