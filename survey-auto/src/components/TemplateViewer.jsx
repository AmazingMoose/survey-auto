import { useState, useCallback, useEffect } from 'react'
import CustomSelect from './CustomSelect'
import CodeMirror from '@uiw/react-codemirror'
import Button from '@mui/material/Button'
import templateService from '../services/template'

const TemplateViewer = () => {
    const [template, setTemplate] = useState('')
    const [templateOptions, setTemplateOptions] = useState([])
    const [templateText, setTemplateText] = useState("console.log('hello world');")

    const handleChange = (event) => {
        console.log(event.target)
        templateService.getById(event.target.value)
            .then(data => {
                setTemplateText(data.text)
                setTemplate(event.target.value)
            })
            .catch(err => console.log(err.error))

    }
    
    useEffect(() => {
        templateService.getAll().then(data => {
            setTemplateOptions(data)
        })
    }, [])

    const onChange = useCallback((val) => {
        setTemplateText(val);
    }, []);

    return (
        <>
            <CustomSelect 
                headerName="Выберите шаблон:"
                options={templateOptions}
                value={template}
                onChange={handleChange}
            />
            <div>
                <Button>Создать новый шаблон</Button>
                <Button>Сохранить шаблон</Button>
            </div>
            <CodeMirror style={{
                textAlign: 'left', 
                fontSize: "16px"
            }}
                value={templateText} 
                height="200px" 
                onChange={onChange} 
            />
        </>
    )
}

export default TemplateViewer