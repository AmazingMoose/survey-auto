import { useState } from "react";
import CustomSelect from "./CustomSelect";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

const CreateSurveyPanel = () => {
    
    const [template, setTemplate] = useState('')
    const [surveyNames, setSurveyNames] = useState('')
    const [badNames, setBadNames] = useState([])

    const isBadOption = (option) => {
        return badNames.includes(option)
    }

    const handleTemplateChange = (event) => {
        setTemplate(event)
    }

    const validateNameString = (name) => {
        if (name === '') return false
        const numericSurveyName = parseInt(name)
        return !isNaN(numericSurveyName) 
            && numericSurveyName >= 200 
            && numericSurveyName <= 999
    }
    
    const handleSurveyNameChange = (event, value, reason, details) => {
        console.log(`event target val: ${event.target.value}`)
        console.log(`value: ${value}`)
        console.log(`reason: ${reason}`)
        // console.log(`detail: ${details}`)
        console.log(`surveyNames: ${surveyNames}`)
        if (reason === 'clear' || reason === 'removeOption') {
            setSurveyNames('')
            if (reason === 'removeOption') {
                setBadNames(badNames.filter(name => name !== details.option))
            } else {
                setBadNames([])
            }
            return
        }
        if (!validateNameString(event.target.value)) {
            setBadNames(badNames.concat(event.target.value))
            return
        }

        setSurveyNames(surveyNames === '' 
            ? event.target.value 
            : surveyNames.concat(',', event.target.value)
        )
    }

    const handleInputChange = (event) => {
        console.log(event.target.value);
    }

    const options = [
        { id: 10, name: "Template1" },
        { id: 20, name: "Template2" },
        { id: 30, name: "Template3" },
        { id: 40, name: "Template4" },
    ]

    const hasErrors = badNames.length > 0

    return (
         <Stack width='100%' spacing={1} sx={{alignItems: 'center'}}>
            <InputLabel color='primary'>
                Укажите анкеты для создания:
            </InputLabel>
            <Autocomplete 
                id='survey-name' 
                options={[]}
                label='Введите номер анкеты' 
                freeSolo
                multiple
                sx={{
                    width:'500px'
                }}
                renderValue={(value, props) => 
                    value.map((option, index) => {
                        const { key, ...optionProps } = props({index})
                        return (
                            <Chip 
                                key={key} 
                                label={option} 
                                color={isBadOption(option) ? "error" : "primary"} 
                                {...optionProps}
                            />
                        )
                    }
                )}
                onChange={handleSurveyNameChange}
                onInputChange={handleInputChange}
                renderInput={(params) => 
                    <TextField 
                        sx={{backgroundColor: 'white', borderRadius: '5px'}}
                        label='Анкеты' 
                        placeholder="Новые анкеты"
                        error={hasErrors}
                        helperText={hasErrors ? "Есть некорректные имена анкет" : ""}
                        {...params} 
                    />
                }
            />
            <CustomSelect
                headerName={'Выберите шаблон'}
                onChange={handleTemplateChange}
                value={template}
                options={options}
            />
            <Button variant='contained' disabled={hasErrors}>Создать</Button>
        </Stack>
    )
}

export default CreateSurveyPanel