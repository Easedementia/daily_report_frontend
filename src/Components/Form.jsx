import { Container, FormGroup, Label, Input, Logo } from './Styles/Form.styled'

const Form = () => {
  return (
    <Container>
        <FormGroup>
            <Label>Client Name :</Label>
            <Input type='text' />
        </FormGroup>


        <FormGroup>
            <Label>Intervention Specialist :</Label>
            <Input type='text' />
        </FormGroup>


        <FormGroup>
            <Label>Date :</Label>
            <Input type='date' />
        </FormGroup>

        <Logo src='./images/easedementia_logo.png' alt='easedementia logo' />
    </Container>
  )
}

export default Form