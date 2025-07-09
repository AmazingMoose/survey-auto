import { React, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css'

function TabContentWrapper(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p:3 }}>{children}</Box>}
    </div>
  )
}


function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
          >
            <Tab sx={{color: 'white'}} label="Замена анкеты" {...allyProps(0)}/>
            <Tab sx={{color: 'white'}} label="Создание новой анкеты" {...allyProps(1)}/>
            <Tab sx={{color: 'white'}} label="Просмотрщик шаблонов" {...allyProps(2)}/>
            <Tab sx={{color: 'white'}} label="Добавление ключей" {...allyProps(3)}/>
            <Tab sx={{color: 'white'}} label="Проверка номеров" {...allyProps(4)}/>
          </Tabs>
        </Box> 
        <TabContentWrapper value={value} index={0}>
          Item One
        </TabContentWrapper>
        <TabContentWrapper value={value} index={1}>
          Item Two
        </TabContentWrapper>
        <TabContentWrapper value={value} index={2}>
          Item Three
        </TabContentWrapper>
      </Box>
    </>
  )
}

export default App
