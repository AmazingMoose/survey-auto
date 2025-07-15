import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const CustomSelect = ({headerName, value, onChange: handleChange, options}) => {
    return (
        <>
            <InputLabel color='primary'>{headerName}</InputLabel>
            <FormControl style={{ width: 500 }}>
                <Select 
                    variant='outlined'
                    labelId="demo-simple-select-label" 
                    onChange={handleChange} 
                    value={value}
                    sx={{backgroundColor: "white"}}
                >
                    {
                        options.map(option => (
                            <MenuItem 
                                key={option.id} 
                                value={option.id}
                            >
                                {option.name}
                            </MenuItem>))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default CustomSelect