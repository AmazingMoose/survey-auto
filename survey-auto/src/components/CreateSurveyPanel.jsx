import { useState } from "react";
import CustomSelect from "./CustomSelect";
import TextField from "@mui/material/TextField";

const CreateSurveyPanel = () => {
    
    const [template, setTemplate] = useState('')

    const handleTemplateChange = (event) => {
        setTemplate(event.target.value)
    }

    const options = [
        {id: 10, name: "Template1"},
        {id: 20, name: "Template2"},
        {id: 30, name: "Template3"},
        {id: 40, name: "Template4"},
    ]
    
    return (
        <>
            <TextField id='survey-name' 
                label='Введите номер анкеты' 
                variant='outlined'
                sx={{
                    backgroundColor: 'white', 
                    borderRadius: '5px',
                    width:'500px'
                }}
                fullWidth
            />
            <CustomSelect
                headerName={'Выберите шаблон'}
                onChange={handleTemplateChange}
                value={template}
                options={options}
            />
        </>
    )
}

export default CreateSurveyPanel