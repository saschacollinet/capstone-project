import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import FlipCard from '../flipCard/FlipCard'
import CreateActivityForm from '../createActivityForm/CreateActivityForm'
import loadFromLocal from '../lib/loadFromLocal'
import saveToLocal from '../lib/saveToLocal'
import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { Route, Switch, useLocation } from 'react-router-dom'

export default function App({ initialActivities }) {
  const [activities, setActivities] = useState(
    loadFromLocal('localActivities') ?? initialActivities
  )
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/list') {
      setSearchTerm('')
    }
  }, [location.pathname])

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header
          searchTerm={searchTerm}
          onChange={event => {
            setSearchTerm(event.target.value)
          }}
        />
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list">
              {activities
                .filter(activity => {
                  if (searchTerm === '') {
                    return activity
                  } else if (
                    activity.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    activity.description
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    activity.street
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    activity.city
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    activity.zipCode
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    activity.country
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return activity
                  }
                })
                .map(activity => (
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
