import { useMemo } from "react"
import "../css/aa.css"

function AAmarca() {
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const imageTitle = `${currentYear} © Agustín Arnaiz`

  return (
    <>
      <a href="https://www.arnaiz.com.ar" target="_blank" rel="noopener noreferrer" className="aa-brand">
        <small className="brand">
          <i>Sitio creado por</i>{" "}
        </small>
        <img title={imageTitle} decoding="async" src="/images/i1.png" alt="Agustin Arnaiz Logo" />
      </a>
    </>
  )
}

export default AAmarca
