import React, { useState } from 'react'
import Card from './Card'

const form = () => {
    const [user, setUser] = useState({
        nombre: '',
        cancion: '',
        banda: '',
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length >= 3 && user.nombre.charAt(0) !== " " && user.cancion.length >= 6){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }


return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Ingrese su nombre</label>
            <input type= "text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Ingrese su cancion favorita</label>
            <input type= "text" value={user.cancion} onChange={(e) => setUser({...user, cancion: e.target.value})}/>
            <label>Ingrese su Banda favorita</label>
            <input type="text" value={user.banda} onChange={(e) => setUser({...user, banda: e.target.value})}/>
            <button>Subir mi Perfil</button>
            {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card nombre={user.nombre} cancion={user.cancion} banda={user.banda}/>}
    </div>
)
}

export default form
