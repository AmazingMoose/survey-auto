import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import templateService from '../services/template'

const UploadTemplatePanel = () => {
    const inputFile = useRef(null)
    const [templateFile, setTemplateFile] = useState(null)
    const [templateName, setTemplateName] = useState('')
    const handleSelectClick = () => {
        inputFile.current.click()
    }
    
    const handleInputChange = () => {
        setTemplateFile(inputFile.current.files[0])
    }

    const handleTemplateNameChange = (event) => {
        setTemplateName(event.target.value)
    }

    const handleUploadClick = () => {
        const payload = {
            templateName: templateName,
            templateFile: templateFile
        }
        templateService.uploadTemplate(payload)
    }

    return (
        <Stack spacing={2}>
            <InputLabel onChange={handleTemplateNameChange}>Введите название шаблона: </InputLabel>
            <TextField 
                variant="filled" 
                fullWidth 
                size="small" 
                slotProps={{ 
                    htmlInput: {
                        style: {fontSize: 16}
                    } 
                }} 
            />
            <Stack>
                <InputLabel>Путь к файлу: </InputLabel> 
                <Stack direction='row'>
                    <TextField variant="filled" fullWidth disabled size="small"/>
                    <Button variant="text" onClick={handleSelectClick}>
                        Обзор
                        <input 
                            type="file" 
                            hidden
                            ref={inputFile}
                            onChange={handleInputChange}
                        />    
                    </Button>
                </Stack>
            </Stack>
            <Button variant="contained" onClick={handleUploadClick}>Загрузить</Button>
        </Stack>
    )
}

export default UploadTemplatePanel