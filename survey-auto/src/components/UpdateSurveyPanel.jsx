import { React, useState } from 'react'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import Checkbox from '@mui/material/Checkbox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

function UpdateSurveyPanel() {

    const [template, setTemplate] = useState(0)

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
            <InputLabel color='primary'>Выберите шаблон:</InputLabel>
            <FormControl style={{ width: 500}}>
                <Select variant='outlined' labelId="demo-simple-select-label" onChange={handleChange} value={template}>
                    <MenuItem value={10}>Template1</MenuItem>
                    <MenuItem value={20}>Template2</MenuItem>
                    <MenuItem value={30}>Template3</MenuItem>
                    <MenuItem value={40}>Template4</MenuItem>
                </Select>
            </FormControl>
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