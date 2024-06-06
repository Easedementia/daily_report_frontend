import { useState, useRef } from "react"
import { FormTextArea } from "./Styles/Form.styled"

const AutoResizingTextArea = () => {
    const [text, setText] = useState('');
    const textAreaRef = useRef(null);

    console.log("Text:", text);

    const handleChange = (e) => {
        setText(e.target.value);
        adjustHeight();
    };

    const adjustHeight = () => {
        const textArea = textAreaRef.current;
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`
    }


  return (
    <FormTextArea
        ref={textAreaRef}
        id="formContent"
        value={text}
        onChange={handleChange}
        rows={1}
    />
  );
}

export default AutoResizingTextArea