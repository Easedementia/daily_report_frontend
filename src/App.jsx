import './App.css'
import Form from './Components/Form'
import FormContent from './Components/FormContent'
import Footer from './Components/Footer'
import Images from './Components/Images'
import { Title } from './Components/Styles/Title.styled'
import { Spacer } from './Components/Styles/Form.styled'
import { PageContainer, ContentContainer, FormSection, FormLabel, FormTextArea, DownloadButton } from './Components/Styles/Form.styled'
import { useState } from 'react'
import { usePDF } from 'react-to-pdf'



function App() {
  const [remarks, setRemarks] = useState('');
  const [formData, setFormData] = useState({name:'', interventionSpecialist:'', date:'', text:'', remarks:'', images: []});

  const {toPDF, targetRef} = usePDF({
    filename: 'daily_report.pdf',
  });

  const handleFormChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const handleDownloadPDF = () => {
    toPDF();
  }

  return (
    <>
    <div ref={targetRef}>
      <PageContainer>
        <ContentContainer>
          <Title color='#5f005f'>Daily Report</Title>
          <Form formData={formData} onChange={handleFormChange} />
          <Spacer/>
          <FormContent areaOfFocus= "Physical Exercises" timeTaken="10 mnt" formData={formData} onChange={handleFormChange} />
          <Spacer/>
          <FormContent areaOfFocus= "Cognitive Stimulation" timeTaken="10 mnt" formData={formData} onChange={handleFormChange} />
          <Spacer/>
          <FormContent areaOfFocus= "Creative Expression/ Pursuing Hobbies" timeTaken="10 mnt" formData={formData} onChange={handleFormChange} />
          <Spacer/>
          <FormContent areaOfFocus= "Promoting Independence" timeTaken="10 mnt" formData={formData} onChange={handleFormChange} />
          

          <FormSection>
            <FormLabel>Remarks:</FormLabel>
            <FormTextArea as="textarea" id='remarks' value={remarks} onChange={(e) => setRemarks(e.target.value)} />
          </FormSection>
          <Spacer/>
          <Images/>
          <Spacer/>
          <DownloadButton onClick={handleDownloadPDF}>Download as PDF</DownloadButton>
          <Footer/>
        </ContentContainer>
      </PageContainer>
    </div>
    
      
    </>
  )
}

export default App
