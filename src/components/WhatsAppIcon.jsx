import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '/images/i7.png';
import { Box } from '@mui/material';


function WhatsAppIcon() {

  return (
    <Box>
      <FloatingWhatsApp  
        phoneNumber='+54 9 351 382-9351'
        accountName='Veterinaria DAC'
        chatMessage="Hola! Escribe un mensaje y envíalo por whatsapp"
        statusMessage=""
        placeholder="Escriba un mensaje"
        darkMode="true"
        allowClickAway="true"        
        avatar={ logo }
        text="Hola! me gustaría reservar un turno para atender a mi mascota. Saludos!"    
      />
    </Box>
  )
}

export default WhatsAppIcon