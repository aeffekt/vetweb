import React from 'react'
import aalogo from '../images/aaicon.png'

function AAmarca() {
  return (
      <>      
        <a href="https://www.arnaiz.com.ar" target="_blank" className="aa-brand">          
          <small className='brand'>Sitio creado por </small>
          <img title="© Agustín Arnaiz" decoding='async' src={ aalogo } alt="Agustin Arnaiz Logo"/>          
        </a>        
    </>
  )
}

export default AAmarca
