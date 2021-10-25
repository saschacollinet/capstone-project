import Header from '../header/Header'
import BurgerButton from '../burgerButton/BurgerButton'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import Main from '../main/Main'
import Home from '../home/Home'
import Footer from '../footer/Footer'
import FlipCard from '../flipCard/FlipCard'
import CreateActivityForm from '../createActivityForm/CreateActivityForm'
import styled from 'styled-components/macro'
import { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Route, Switch } from 'react-router-dom'
import OnClickOutside from '../hooks/OnClickOutside'
import ScrollToTop from '../hooks/ScrollToTop'

export default function App({ initialActivities }) {
  const [activities, setActivities] = useState(initialActivities)
  const [open, setOpen] = useState(false)
  const node = useRef()
  OnClickOutside(node, () => setOpen(false))
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <div ref={node}>
          <BurgerButton open={open} setOpen={setOpen} />
          <BurgerMenu open={open} setOpen={setOpen} />
        </div>
        <Main>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/list">
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
              </Route>
              <Route exact path="/create">
                <CreateActivityForm
                  onCreateNewActivity={handleCreateNewActivity}
                />
              </Route>
            </Switch>
          </ScrollToTop>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )

  function handleCreateNewActivity(newActivity) {
    const newActivities = [newActivity, ...activities]
    setActivities(newActivities)
  }
}

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  height: 100%;
`
