import React from 'react'
import Hero from './Components/Hero'
import Service from './components/Service'
import MenuDisplay from './components/MenuDisplay'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <Service />
      <MenuDisplay />
      <ReservationForm />
      <Footer />
    </div>
  )
}

export default App