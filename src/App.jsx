import './App.css'
import BackgroundTop from './components/BackgroundTop'
import Container from './components/Container'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'
import LogoFooter from './components/LogoFooter'
import PcdLegend from './components/PcdLegend'

function App() {
  
  return (
    <>
      <Container>
        <BackgroundTop/>
        <Hero/>
        <PcdLegend/>
        <Leaderboard/>
        <LogoFooter/>
      </Container>
    </>
  )
}

export default App
