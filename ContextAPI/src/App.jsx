import { UserContext } from './Context/UserContext'
import Hero from './components/Hero'

function App() {
  const user = {
    name: "Leela",
    age: 21
  }

  return (
    <UserContext.Provider value={user}>
      <Hero />
    </UserContext.Provider>
  )
}

export default App
