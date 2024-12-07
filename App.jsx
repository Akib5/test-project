import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar'
import HeroSec from './Components/Hero'
import Presentation from './Components/Presention'
import SliderSec from './Components/slider'
import ServiceSection from './Components/ServiceSection'
import BlogSec from './Components/BlogSec'
 
import Footer from './Components/Footer'
import ContinuousSlider from './Components/material'
import RecipeReviewCard from './Components/Material ui/Card'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Button variant="contained"  color="error"> Click Me</Button> */}
    <Navbar/>
    <HeroSec/>
    <Presentation/>
   <SliderSec/>
   <ServiceSection/>
   <BlogSec/>
   <ContinuousSlider/>
   <RecipeReviewCard/>
   <Footer/>
     
  
    </>
  )
}

export default App
