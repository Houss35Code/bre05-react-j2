import './App.css'
import User from './User'

function App() {
  return (
    <>
    {/* Test 1 : Admin déconnecté */}
      <User role="Admin" />
      
      
      {/*
      Test 2 : Membre déconnecté
      <User role="Membre" />
      
      Test 3 : Anonyme déconnecté
      <User role="Anonyme" />
      */}
      
    </>
  )
}

export default App