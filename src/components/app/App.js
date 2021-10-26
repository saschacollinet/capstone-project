import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import FlipCard from '../flipCard/FlipCard'
import CreateActivityForm from '../createActivityForm/CreateActivityForm'
import loadFromLocal from '../lib/loadFromLocal'
import saveToLocal from '../lib/saveToLocal'
import styled from 'styled-components/macro'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Route, Switch } from 'react-router-dom'

export default function App({ initialActivities }) {
  const [activities, setActivities] = useState(
    loadFromLocal('localActivities') ?? initialActivities
  )
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Main>
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
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )

  function handleCreateNewActivity(newActivity) {
    const newActivities = [newActivity, ...activities]
    setActivities(newActivities)
    saveToLocal('localActivities', newActivities)
  }
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`
