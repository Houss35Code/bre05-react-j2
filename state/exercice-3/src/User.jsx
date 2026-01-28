import { useState } from 'react'

function User({ role }) {
  const [status, setStatus] = useState(false)
  {/* Pour tester avec status connecté
  const [status, setStatus] = useState(true) */}
  const [userRole, setUserRole] = useState(role)

  return (
    <article>
      <h2>Mari Doucet</h2>
      <h3>{userRole}</h3>
      <p>{status ? 'En Ligne' : 'Hors Ligne'}</p>
    </article>
  )
}

export default User