import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { siginin } from "./pages"
import { CombineProviders, providers } from "./contexts"
import Signin from "./pages/siginin/signin"




function App() {
  return (
    <Fragment>
      <CombineProviders contexts={providers}>
        <Router>
          <Routes>
            <Route index={true} path="/" element={<Signin />} />
          </Routes>
        </Router>
      </CombineProviders>
    </Fragment>
  )
}

export default App
