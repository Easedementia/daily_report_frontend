import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`


export const FormGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`


export const Label = styled.div`
    margin-right: 10px;
    font-size: 16px;
    min-width: 200px;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 5px;
        min-width: unset;
    }
`


export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #000;
    width: 350px;
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
    margin: 20px auto;
    border-radius: 10px;

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

    @media (max-width: 768px) {
        margin: 5px 0;
    }
`


export const FormLabel = styled.div`
    font-weight: normal;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        margin-bottom: 2px;
    }
`


export const FormTextArea = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #000;
  resize: none;

  @media (max-width: 768px) {
    height: 40px;
  }
`





