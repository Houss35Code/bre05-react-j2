import './App.css'
import User from './User'

function App() {
  let user = {
    firstName: "Alain",
    lastName: "Terieur",
    email: "alain.terieur@inlook.com"
  };

  return (
    <>
      <User user={user} />
    </>
  )
}

export default App
