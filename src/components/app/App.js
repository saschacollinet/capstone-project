import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import ActivitiesList from '../ActivitiesList/ActivitiesList'
import CreateActivityForm from '../createActivityForm/CreateActivityForm'
import Map from '../Map/Map'
import loadFromLocal from '../../lib/loadFromLocal'
import saveToLocal from '../../lib/saveToLocal'
import filterActivities from '../../utils/filterActivities'
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

  const [coords, setCoords] = useState({})

  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/list') {
      setSearchTerm('')
    }
  }, [location.pathname])

  useEffect(() => {
    saveToLocal('localActivities', activities)
  }, [activities])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude })
      }
    )
  }, [])

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
            <Route exact path="/map">
              <Map
                activities={activities}
                coords={coords}
                onClickBookmark={handleBookmark}
              />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )

  function handleBookmark(event, id) {
    event.stopPropagation()

    const activity = activities.find(card => card.id === id)

    const index = activities.findIndex(card => card.id === id)

    const newActivities = [
      ...activities.slice(0, index),
      {
        ...activity,
        isBookmarked: !activity.isBookmarked,
      },
      ...activities.slice(index + 1),
    ]

    setActivities(newActivities)
  }

  function handleCreateNewActivity(newActivity) {
    const newActivities = [newActivity, ...activities]

    setActivities(newActivities)
  }
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`
