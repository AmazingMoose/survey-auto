import { useState, useCallback } from 'react'
import CustomSelect from './CustomSelect'
import CodeMirror from '@uiw/react-codemirror'

const TemplateViewer = () => {
    const [template, setTemplate] = useState('')
    const [templateText, setTemplateText] = useState("console.log('hello world');")

    const handleChange = (event) => {
        setTemplate(event.target.value)
    }
    
    const options = [
        {id: 10, name: "Template1"},
        {id: 20, name: "Template2"},
        {id: 30, name: "Template3"},
        {id: 40, name: "Template4"},
    ]

    const onChange = useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setTemplateText(val);
    }, []);

    return (
        <>
            <CustomSelect 
                headerName="Выберите шаблон:"
                options={options}
                value={template}
                onChange={handleChange}
            />
            <CodeMirror 
                value={templateText} 
                height="200px" 
                onChange={onChange} 
            />
        </>
    )
}

export default TemplateViewer