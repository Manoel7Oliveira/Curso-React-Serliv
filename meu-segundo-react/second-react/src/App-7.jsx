import { ThemeProvider } from "./Contexts/ThemeContext"
import { UserProvider } from "./Contexts/UserContext"
import Layout from "./UseContext-CreateContext/Layout/Layout"


function App() {


  return (

    <div>
      <UserProvider>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </UserProvider>

    </div>
  )
}

export default App
