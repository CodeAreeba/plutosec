 
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Cyber from './components/cyber/Cyber'
import Certification from './components/certification/Certification'
import Whyus from './components/whyus/whyus'
import Clients from './components/clients/Clients'
import Blogs from './components/blogs/Blogs'
import Testimonial from './components/testimonials/Testimonial'
import Valueable from './components/valueable/Valueable'
import Contact from './components/contact/Contact'
import Service from './components/services/Service'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <div className="bg-black min-h-screen px-4">
    <Navbar />
    <Main />
    <Cyber></Cyber>  
    <Certification />
    <Whyus />
     <Clients></Clients>
     <Blogs></Blogs>
     <Testimonial></Testimonial>
     < Valueable />
     <Contact />
     <Footer />
      </div>
    </>
  )
}

export default App
