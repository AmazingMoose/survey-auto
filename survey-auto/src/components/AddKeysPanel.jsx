import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const AddDictDialog = (props) => {
    const { onClose, open } = props
    const handleClose = () => {
        onClose()
    }
    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>Введите название словаря</DialogTitle>
            <TextField variant='filled' size="small" sx={{padding: "10px"}}/>
            <Button>Добавить</Button>
        </Dialog>
    )
}


const AddKeysPanel = () => {

    const [dialogOpen, setDialogOpen] = useState(false)


    const handleClick = () => {
        setDialogOpen(true)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Button onClick={ handleClick }>Добавить Словарь</Button>
            <AddDictDialog 
                onClose={ handleClose } 
                open={ dialogOpen }
            />
        </>
    )
}

export default AddKeysPanel
