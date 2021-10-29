import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import ActivitiesList from '../ActivitiesList/ActivitiesList'
import CreateActivityForm from '../createActivityForm/CreateActivityForm'
import loadFromLocal from '../lib/loadFromLocal'
import saveToLocal from '../lib/saveToLocal'
import filterActivities from '../lib/filterActivities'
import styled from 'styled-components/macro'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'
import { useState, useEffect } from 'react'
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

  const filteredActivities =
    filterActivities(activities, searchTerm) || activities

  const bookmarkedActivities = activities.filter(
    activity => activity.isBookmarked === true
  )

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
              <ActivitiesList
                activities={filteredActivities}
                onClickBookmark={handleBookmark}
              />
            </Route>
            <Route exact path="/bookmarks">
              <ActivitiesList
                activities={bookmarkedActivities}
                onClickBookmark={handleBookmark}
              />
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

  function handleBookmark(id) {
    const activity = activities.find(card => card.id === id)
    const indexActivities = activities.findIndex(card => card.id === id)
    const newActivities = [
      ...activities.slice(0, indexActivities),
      {
        ...activity,
        isBookmarked: !activity.isBookmarked,
      },
      ...activities.slice(indexActivities + 1),
    ]
    setActivities(newActivities)
    saveToLocal('localActivities', newActivities)
  }

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
