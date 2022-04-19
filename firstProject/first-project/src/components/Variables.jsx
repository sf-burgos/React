//racfce
import React from 'react'

const Variables = () => {
    const saludos = 'hola desde constante'
    const imagen = 'https://i.blogs.es/98ea49/1366_2000/1366_2000.jpg'
  return (
    <div>
        <h2>Nuevo componente { saludos }</h2>
        <img src={imagen} alt = ""/>
    </div>
  )
}

export default Variables