import './App.css'
import Footer from './components/Footer'
import Getstarted from './components/Getstarted'
import Home from './components/Home'
import Layanan from './components/Layanan'
import Navbar from './components/Navbar'
import Profil from './components/Profil-riview'
import ReviewSlider from './components/riview'
import Using from './components/Using'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Layanan />  
    <Profil />
    <Using />
    <ReviewSlider />
    <Getstarted />
    <Footer />
    </>
  )
}

export default App
