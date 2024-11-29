
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function WhatsAppIcon() {

  return (
      <FloatingWhatsApp  
        phoneNumber="+54 9 3512 17-2630" 
        accountName="Veterinaria NEFRONCOVET"        
        chatMessage="Hola! En que podemos ayudarte?"    
        statusMessage=""
        placeholder="Escriba un mensaje"
        darkMode="true"
        allowClickAway="true"        
        text="Hola! me gustaría reservar un turno para atender a mi mascota. Saludos!"    
      />
  )
}

export default WhatsAppIcon