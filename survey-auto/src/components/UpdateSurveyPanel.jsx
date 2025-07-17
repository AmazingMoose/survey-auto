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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const UpdateSurveyPanel = () => {

    const [options, setOptions] = useState([])
    const [template, setTemplate] = useState('')

    useEffect(() => {surveyService.getAll().then(data => {
        console.log(data)
        setOptions(data.map(data=> data.name))}
    )}, [])
    
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
                getOptionLabel={(option => option)}
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
                            {option}
                        </li>
                    )
                }}
                style={{ width: 500}}
                renderInput={(params => {
                    return(
                        <TextField style={{backgroundColor: 'white'}} {...params} label="Анкеты" placeholder="Выбранные анкеты"/>
                    )}
                )}
            />
            <CustomSelect 
                headerName="Выберите шаблон:"
                options={options}
                value={template}
                onChange={handleChange}
            />
            <Button variant='contained'>Применить</Button>
        </Stack>
    )
}


export default UpdateSurveyPanel