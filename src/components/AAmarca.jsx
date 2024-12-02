import React from 'react'
import aalogo from '../images/aaicon.png'

function AAmarca() {
  return (
      <>
        <a href="https://www.arnaiz.com.ar" target="_blank">          
          <small className='brand'>Página desarrollada por </small>
          <img title="Agustin Arnaiz" decoding='async' src={ aalogo } alt="Agustin Arnaiz Logo"/>          
        </a>
        <p>© 2025</p>
    </>
  )
}

export default AAmarca
