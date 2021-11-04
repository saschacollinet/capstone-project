import MapMarker from '../MapMarker/MapMarker'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components/macro'

export default function Map({ activities, coords, onClickBookmark }) {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, gestureHandling: 'greedy' }}
        onChange={''}
        onChildClick={''}
      >
        {activities.map(activity => (
          <MapMarker
            id={activity.id}
            name={activity.name}
            description={activity.description}
            street={activity.street}
            city={activity.city}
            zipCode={activity.zipCode}
            country={activity.country}
            lat={activity.lat}
            lng={activity.lng}
            openingHours={activity.openingHours}
            website={activity.website}
            isFreeOfCharge={activity.isFreeOfCharge}
            isBookmarked={activity.isBookmarked}
            key={activity.id}
            onClickBookmark={onClickBookmark}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 80vh;
  width: 90vw;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  padding: 10px;
`
