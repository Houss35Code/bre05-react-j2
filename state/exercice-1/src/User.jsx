import { useState } from 'react'

function User() {
  // Changez true ou false ici pour tester
  const [status, setStatus] = useState(false)

  return (
    <article>
      <h2>Mari Doucet</h2>
      <p>{status ? 'En Ligne' : 'Hors Ligne'}</p>
    </article>
  )
}

export default User