import Header from '../header/Header'
import Main from '../main/Main'
import Home from '../home/Home'
import Footer from '../footer/Footer'
import FlipCard from '../card/FlipCard'
import styled from 'styled-components/macro'

export default function App({ activities }) {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Home />
        <br />
        {activities.map(activity => (
          <FlipCard
            name={activity.name}
            description={activity.description}
            street={activity.street}
            city={activity.city}
            zipCode={activity.zipCode}
            country={activity.country}
            openingHours={activity.openingHours}
            website={activity.website}
            isFreeOfCharge={activity.isFreeOfCharge}
            key={activity.id}
          />
        ))}
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
