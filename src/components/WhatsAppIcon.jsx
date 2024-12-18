import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '/images/i2.jpg';


function WhatsAppIcon() {

  return (
      <FloatingWhatsApp  
        phoneNumber='+54 9 351 217-2630'
        accountName='Veterinaria NEFRONCOVET'
        chatMessage="Hola! Escribe un mensaje y envíalo por whatsapp"
        statusMessage=""
        placeholder="Escriba un mensaje"
        darkMode="true"
        allowClickAway="true"        
        avatar={ logo }
        text="Hola! me gustaría reservar un turno para atender a mi mascota. Saludos!"    
      />
  )
}

export default WhatsAppIcon