import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPages from "./pages/authentication";


function App() {


  return (
    <BrowserRouter basename="/sampahcerdas">
      <Routes>
        <Route path="/" element={<AuthenticationPages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App