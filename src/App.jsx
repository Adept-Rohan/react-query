import CategoryPage from "./components/CategoryPage"
import Page from "./components/Page"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/category/:heroId" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
