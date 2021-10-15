import Header from '../header/Header'
import Main from '../main/Main'
import Home from '../home/Home'
import Footer from '../footer/Footer'
import FlipCard from '../card/FlipCard'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Home />
        <br />
        <FlipCard />
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
