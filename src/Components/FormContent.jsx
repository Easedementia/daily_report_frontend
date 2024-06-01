import { FormContainer, FormHeader, FormSection, FormLabel, FormTextArea } from "./Styles/Form.styled" 

// eslint-disable-next-line react/prop-types
const FormContent = ({areaOfFocus, timeTaken }) => {
  return (
    <FormContainer>
        <FormHeader>
            <div>Area of Focus : <strong> {areaOfFocus} </strong> </div>
            <div>Time Taken : <strong> {timeTaken} </strong> </div>
        </FormHeader>

        <FormSection>
            <FormLabel>Activities Done :</FormLabel>
            <FormTextArea type="text" />
        </FormSection>

        <FormSection>
            <FormLabel>Purpose :</FormLabel>
            <FormTextArea type="text" />
        </FormSection>

        <FormSection>
            <FormLabel>Outcome :</FormLabel>
            <FormTextArea type="text" />
        </FormSection>
    </FormContainer>
  )
}

export default FormContent