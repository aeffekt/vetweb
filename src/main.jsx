import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, Box, Typography } from "@mui/material";
import theme from './css/theme.js'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>    
    <ThemeProvider theme={theme}>
      <Box >
        <Typography sx={{ textAlign: 'center', color: 'text.primary' }}>              
          <App />    
        </Typography>
      </Box>      
    </ThemeProvider>      
  </StrictMode>,
)
