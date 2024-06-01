import { FooterContainer, FooterTitle, FooterAddress, FooterContacts, FooterEmail, FooterImage, FooterText, FooterWebsite } from "./Styles/Footer.styled"

const Footer = () => {
  return (
    <FooterContainer>
        <FooterImage src="./images/Dementia-amico.png" alt="Footer Image" />
        <FooterText>
            <FooterTitle>Easedementia Technologies Pvt. Ltd</FooterTitle>
            <FooterAddress>DS7, Heavenly Plaza, Vazhakkala, Kochi</FooterAddress>
            <FooterContacts>
                +91 79077 40698 | +91 99467 44402
            </FooterContacts>
            <FooterEmail>support@easedementia.com</FooterEmail>
            <FooterWebsite>
                <a href="https://www.easedementia.com">www.easedementia.com</a>
            </FooterWebsite>
        </FooterText>
    </FooterContainer>
  )
}

export default Footer