import './App.css'
import BackgroundTop from './components/BackgroundTop'
import Container from './components/Container'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'
import LogoFooter from './components/LogoFooter'

function App() {
  
  return (
    <>
      <Container>
        <BackgroundTop/>
        <Hero/>
        <Leaderboard/>
        <LogoFooter/>
      </Container>
    </>
  )
}

export default App
