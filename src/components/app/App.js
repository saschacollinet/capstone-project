import Header from '../header/Header'
import Main from '../main/Main'
import Home from '../home/Home'
import Footer from '../footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <Main>
        <Home />
        <Footer />
      </Main>
    </div>
  )
}
