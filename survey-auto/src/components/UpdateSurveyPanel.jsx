import { React, useState } from 'react'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import Checkbox from '@mui/material/Checkbox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import CustomSelect from './CustomSelect'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const UpdateSurveyPanel = () => {

    const options = [
        {id: 10, name: "Template1"},
        {id: 20, name: "Template2"},
        {id: 30, name: "Template3"},
        {id: 40, name: "Template4"},
    ]

    const [template, setTemplate] = useState('')

    const handleChange = (event) => {
        setTemplate(event.target.value)
    }
    

    return (
        <Stack width='100%' spacing={1} sx={{alignItems: 'center'}}>
            <InputLabel color='primary'>Выберите анкеты для изменения:</InputLabel>
            <Autocomplete
                id='update-survey-tags'
                multiple
                options={survey_ids}
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
                    console.log(params)
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

const survey_ids = [
    '610',
    '785',
    '805'
]

export default UpdateSurveyPanel