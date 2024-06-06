import { useState } from 'react'
import { Container, FormGroup, Label, Input, Logo } from './Styles/Form.styled'

const Form = () => {
  const [name, setName] = useState('');
  const [interventionSpecialist, setInterventionSpecialist] = useState('');
  const [date, setDate] = useState('');

  console.log("Client Name:", name);
  console.log("Intervention Specialist:", interventionSpecialist);
  console.log("Date:", date);

  return (
    <Container>
        <FormGroup>
            <Label>Client Name :</Label>
            <Input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>


        <FormGroup>
            <Label>Intervention Specialist :</Label>
            <Input type='text' id='interventionSpecialist' value={interventionSpecialist} onChange={(e) => setInterventionSpecialist(e.target.value)} />
        </FormGroup>


        <FormGroup>
            <Label>Date :</Label>
            <Input type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </FormGroup>

        <Logo src='./images/easedementia_logo.png' alt='easedementia logo' />
    </Container>
  )
}

export default Form
