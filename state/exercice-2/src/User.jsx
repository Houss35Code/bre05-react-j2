import { useState } from 'react'
{/* Test 1 : Utilisateur anonyme déconnecté (par défaut) */}
function User() {
  const [status, setStatus] = useState(false)
  const [role, setRole] = useState('Anonyme')
{/*
     Tester avec différentes valeurs
     
    Test 2 : Admin connecté
    const [status, setStatus] = useState(true)
    const [role, setRole] = useState('Admin')
    
    Test 3 : Membre déconnecté
    const [status, setStatus] = useState(false)
    const [role, setRole] = useState('Membre')
    
    Test 4 : Membre connecté
    const [status, setStatus] = useState(true)
    const [role, setRole] = useState('Membre')
*/}
  return (
    <article>
      <h2>Mari Doucet</h2>
      <h3>{role}</h3>
      <p>{status ? 'En Ligne' : 'Hors Ligne'}</p>
    </article>
  )
}

export default User