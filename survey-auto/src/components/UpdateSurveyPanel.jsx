import { React, useEffect, useState } from 'react'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import Checkbox from '@mui/material/Checkbox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import CustomSelect from './CustomSelect'
import surveyService from '../services/survey'
import templateService from '../services/template'
import Chip from '@mui/material/Chip'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const UpdateSurveyPanel = () => {

    const [templateOptions, setTemplateOptions] = useState([])
    const [options, setOptions] = useState([])
    const [template, setTemplate] = useState("")
    useEffect(() => {
        surveyService.getAll().then(data => {
            setOptions(data)
        })
        
        templateService.getAll().then(data => {
            setTemplateOptions(data)
        })
    }, [])
    
    

    const handleChange = (event) => {
        setTemplate(event.target.value)
    }
    

    return (
        <Stack width='100%' spacing={1} sx={{alignItems: 'center'}}>
            <InputLabel color='primary'>Выберите анкеты для изменения:</InputLabel>
            <Autocomplete
                id='update-survey-tags'
                multiple
                options={options}
                disableCloseOnSelect
                getOptionLabel={(option => toString(option.survey_id))}
                renderOption={(props, option, { selected }) => {
                    const {key, ...optionProps} = props
                    return (
                        <li key={key} {...optionProps}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{marginRight: 8}}
                                checked={selected}
                            />
                            {option.survey_id}
                        </li>
                    )
                }}
                style={{ width: 500}}
                renderValue={(values, getItemProps) =>
                    values.map((option, index) => {
                    const { key, ...itemProps } = getItemProps({ index });
                    return (
                        <Chip
                        key={key}
                        label={option.survey_id}
                        {...itemProps}
                        />
                    );
                    })
                }
                renderInput={(params => {
                    return(
                        <TextField 
                            style={{backgroundColor: 'white'}} 
                            {...params} 
                            label="Анкеты" 
                            placeholder="Выбранные анкеты"
                        />
                    )}
                )}
            />
            <CustomSelect 
                headerName="Выберите шаблон:"
                options={templateOptions}
                value={template}
                onChange={handleChange}
            />
            <Button variant='contained'>Применить</Button>
        </Stack>
    )
}


export default UpdateSurveyPanel