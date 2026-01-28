import './App.css'
import User from './User'

function App() {
  let users = [
    {
      firstName: "Alain",
      lastName: "Terieur",
      email: "alain.terieur@inlook.com"
    },
    {
      firstName: "Alex",
      lastName: "Terieur",
      email: "alex.terieur@outlook.com"
    },
  ];

  return (
    <>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </>
  )
}

export default App
