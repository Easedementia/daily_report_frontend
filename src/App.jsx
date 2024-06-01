
import './App.css'
import Form from './Components/Form'
import FormContent from './Components/FormContent'
import Footer from './Components/Footer'
import { Title } from './Components/Styles/Title.styled'
import { Spacer } from './Components/Styles/Form.styled'

function App() {
  

  return (
    <>
      <Title color='#5f005f'>Daily Report</Title>
      <Form />
      <Spacer/>
      <FormContent areaOfFocus= "Physical Exercises" timeTaken="10 mnt" />
      <Spacer/>
      <FormContent areaOfFocus= "Cognitive Stimulation" timeTaken="10 mnt" />
      <Spacer/>
      <FormContent areaOfFocus= "Creative Expression/ Pursuing Hobbies" timeTaken="10 mnt" />
      <Spacer/>
      <FormContent areaOfFocus= "Promoting Independence" timeTaken="10 mnt" />
      <Spacer/>
      <Footer/>
    </>
  )
}

export default App
