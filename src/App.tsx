import Cards from './components/Cards'
import HeroBanner from './components/HeroBanner'
import heroImage from './assets/mesh-network.jpg'

function App() {

  return (
    <>
      <HeroBanner
        image={heroImage}
        className='hero-banner__landing-page'
        title="Hello There"
        subtitle="I'm excited to show you all my skills through demo, let's get started!"
      />
      <Cards />
    </>
  )
}

export default App
