import Header from '../header/Header'
import Burger from '../burger/burger'
import Menu from '../menu/menu'
import Main from '../main/Main'
import Home from '../home/Home'
import Footer from '../footer/Footer'
import FlipCard from '../card/FlipCard'
import CreateActivityForm from '../createActivityForm/CreateActivityForm'
import styled from 'styled-components/macro'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

export default function App({ initialActivities }) {
  const [activities, setActivities] = useState(initialActivities)
  const [open, setOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
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
          <br />
          <CreateActivityForm onCreateNewActivity={handleCreateNewActivity} />
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )

  function handleCreateNewActivity(newActivity) {
    const newActivities = [...activities, newActivity]
    setActivities(newActivities)
  }
}

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`
