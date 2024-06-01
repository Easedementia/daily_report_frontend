import styled from "styled-components";


export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #000;
    box-sizing: border-box;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        text-align: left;
    }
`


export const FooterImage = styled.img`
    width: 150px;
    height: auto;

    @media (max-width: 768px) {
        width: 120px;
        margin-bottom: 20px;
    }
`


export const FooterText = styled.div`
    text-align: right;

    @media (max-width: 768px) {
        text-align: left;
    }
`


export const FooterTitle = styled.div`
    font-weight: bold;
`


export const FooterAddress = styled.div`
    margin-top: 10px;
`


export const FooterContacts = styled.div`
    margin-top: 5px;
`


export const FooterEmail = styled.div`
    margin-top: 5px;
`


export const FooterWebsite = styled.div`
    margin-top: 5px;
    a{
        color: #000;
        text-decoration: none;
    }
`


