import React from 'react'

const Card = ({nombre, cancion, banda}) => {

return (
    <div>
        <h3>Bienvenido {nombre}, Ya esta registrado tu perfil</h3>
        <h3>Registramos que {cancion} es tu cancion favorita, y el album {banda} son tus selecciones preferidad.</h3>
        <h3>En base a esto, te vamos a recomendar grupos y canciones diferentes.</h3>
        <h2>Gracias por usar nuestro servicio.</h2>
        <h5>ya se que mis habilidades de css estan feos, perdonamela x esta vez jaja</h5>
    </div>
)
}

export default Card
