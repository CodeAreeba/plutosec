 
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
    <Routes>
       
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog/:slug" element={<Blog />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
