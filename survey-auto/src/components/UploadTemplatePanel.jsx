import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

const UploadTemplatePanel = () => {

    return (
        <Stack spacing={2}>
            <InputLabel>Введите название шаблона: </InputLabel>
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
                    <Button variant="text">Обзор</Button>
                </Stack>
            </Stack>
            <Button variant="contained">Загрузить</Button>
        </Stack>
    )
}

export default UploadTemplatePanel