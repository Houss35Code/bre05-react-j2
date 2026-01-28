function User({ user }) {
  return (
    <article>
      <h2>{user.firstName} {user.lastName}</h2>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </article>
  )
}

export default User