import GoogleMapReact from 'google-map-react'
import styled from 'styled-components/macro'

export default function Map() {
  const coordinates = { lat: 51.285843, lng: 6.36772 }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCc3e9KfgsjelPHuicG-oaXj7e22xPIzbU' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
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
