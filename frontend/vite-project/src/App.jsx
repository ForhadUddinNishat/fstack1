import { Box } from "@chakra-ui/react"

import {Route, Routes} from "react-router-dom"
import CreatePage from './pages/CreatePage.jsx'
import HomePage from "./pages/HomePage.jsx"
import Navbar from "./compo/Navbar.jsx"

function App() {
  return (
    <Box minH={"100"}>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element= {<HomePage/>}></Route>
        <Route path="/create" element= {<CreatePage/>}></Route>
      </Routes>

    </Box>
  )
}

export default App
