import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, Container, Typography } from "@mui/material";
import theme from './css/theme.js'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>
          <App />    
        </Typography>
      </Container>      
    </ThemeProvider>      
  </StrictMode>,
)
