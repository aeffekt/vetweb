
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppIcon() {

  return (
      <FloatingWhatsApp  
        phone="+54 9 3512 17-2630" 
        accountName="Veterinaria NEFRONCOVET"        
        chatMessage="Hola! En que podemos ayudarte?"    
        statusMessage=""
        placeholder="Escriba un mensaje"
        darkMode="true"
        allowClickAway="true"
        avatar="src/images/NEFRONCOVET.enc"
        text="Hola! me gustaría reservar un turno para atender a mi mascota. Saludos!"    
      />
  )
}
