function User(props) {
  return (
    <article>
      <h2>{props.username}</h2>
      <a href={`mailto:${props.email}`}>{props.email}</a>
    </article>
  )
}

export default User