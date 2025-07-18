import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from "react";
import templateService from '../services/template'
import Snackbar from "@mui/material/Snackbar";

const UploadTemplatePanel = () => {
    const inputFile = useRef(null)
    const [templateFile, setTemplateFile] = useState('')
    const [templateName, setTemplateName] = useState('')
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: ''
    })
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
        templateService
            .uploadTemplate(payload)
            .then(() => setSnackbar({ open: true, message: "Template saved" }))
            .catch((err) => setSnackbar({ open: true, message: err }))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({
            open: false,
            message: ''
        })
    }

    return (
        <Stack spacing={2}>
            <InputLabel >Введите название шаблона: </InputLabel>
            <TextField 
                variant="filled" 
                fullWidth 
                size="small" 
                onChange={handleTemplateNameChange}
                slotProps={{ 
                    htmlInput: {
                        style: {fontSize: 16}
                    } 
                }} 
            />
            <Stack>
                <InputLabel>Путь к файлу: </InputLabel> 
                <Stack direction='row'>
                    <TextField variant="filled" value={templateFile.name} fullWidth disabled size="small"/>
                    <Button variant="text" onClick={handleSelectClick}>
                        Обзор
                        <input 
                            type="file" 
                            name="template"
                            hidden
                            ref={inputFile}
                            onChange={handleInputChange}
                        />    
                    </Button>
                </Stack>
            </Stack>
            <Button variant="contained" onClick={handleUploadClick}>Загрузить</Button>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={snackbar.message}
            />
        </Stack>
    )
}

export default UploadTemplatePanel