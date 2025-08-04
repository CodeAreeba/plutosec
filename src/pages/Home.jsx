import React from 'react'

import Main from '../components/main/Main';
import Cyber from '../components/cyber/Cyber';
import Certification from '../components/certification/Certification';
import Whyus from '../components/whyus/whyus';
import Clients from '../components/clients/Clients';
import Blogs from '../components/blogs/Blogs';
import Testimonial from '../components/testimonials/Testimonial';
import Valueable from '../components/valueable/Valueable';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
     <>
     <div>
        <Main />
    <Cyber />  
    <Certification />
    <Whyus />
     <Clients />
     <Blogs />
     <Testimonial />
     < Valueable />
     <Contact />
     </div></>
  )
}

export default Home