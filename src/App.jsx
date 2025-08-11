 
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Industries from "./pages/Industries";
import Whyus from "./pages/Whyus";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";

function App() {
  return (
    <>
    <Routes>
       
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog/:slug" element={<Blog />} />

        <Route path="industries">
          <Route index element={<Industries />} />
          <Route path="blog/:slug" element={<Blog />} />
        </Route>
        
        <Route path="whyus">
          <Route index element={<Whyus />} />
          <Route path="blog/:slug" element={<Blog />} />
        </Route>
         
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactUs />} />

        <Route path="services/:slug">
          <Route index element={<Service />} />
          <Route path="blog/:slug" element={<Blog />} />
        </Route>

      </Route>
    </Routes>
    </>
  )
}

export default App;
