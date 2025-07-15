import { React, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css'
import UpdateSurveyPanel from './components/UpdateSurveyPanel';
import TemplateViewer from './components/TemplateViewer';
import CreateSurveyPanel from './components/CreateSurveyPanel';


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
      <Box className="menu-tabs" sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
          >
            <Tab label="Замена анкеты" {...allyProps(0)}/>
            <Tab label="Создание новой анкеты" {...allyProps(1)}/>
            <Tab label="Просмотрщик шаблонов" {...allyProps(2)}/>
            <Tab label="Добавление ключей" {...allyProps(3)}/>
            <Tab label="Проверка номеров" {...allyProps(4)}/>
          </Tabs>
        </Box> 
        <TabContentWrapper value={value} index={0}>
          <UpdateSurveyPanel/>
        </TabContentWrapper>
        <TabContentWrapper value={value} index={1}>
          <CreateSurveyPanel/>
        </TabContentWrapper>
        <TabContentWrapper value={value} index={2}>
          <TemplateViewer/>
        </TabContentWrapper>
        <TabContentWrapper value={value} index={3}>
          Item Four
        </TabContentWrapper>
        <TabContentWrapper value={value} index={4}>
          Item Five
        </TabContentWrapper>
      </Box>
    </>
  )
}

export default App
