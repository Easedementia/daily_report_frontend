import { FormContainer, FormHeader, FormSection, FormLabel } from "./Styles/Form.styled" 
import AutoResizingTextArea from "./AutoResizingTextArea"

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
            <AutoResizingTextArea name='phactivity' />
        </FormSection>

        <FormSection>
            <FormLabel>Purpose :</FormLabel>
            <AutoResizingTextArea name='phpurpose' />
        </FormSection>

        <FormSection>
            <FormLabel>Outcome :</FormLabel>
            <AutoResizingTextArea name='phoutcome' />
        </FormSection>
    </FormContainer>
  )
}

export default FormContent