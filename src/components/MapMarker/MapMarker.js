import BookmarkButton from '../BookmarkButton/BookmarkButton'
import Marker from '../../assets/images/map-marker-outline.svg'
import styled, { css } from 'styled-components/macro'
import { useState } from 'react'

export default function MapMarker({
  id,
  name,
  description,
  street,
  city,
  zipCode,
  country,
  openingHours,
  website,
  isFreeOfCharge,
  isBookmarked,
  onClickBookmark,
}) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Wrapper>
      <img src={Marker} alt="location marker"></img>
      <MarkerArea>
        <BookmarkButton
          id={id}
          isBookmarked={isBookmarked}
          onClickBookmark={onClickBookmark}
        />
        <Title>{name}</Title>
        <ButtonBox showDetails={showDetails}>
          <Button onClick={openDetails}>
            {showDetails ? 'Show less' : 'Show more'}
          </Button>
        </ButtonBox>
        {showDetails ? (
          <Details>
            <p>
              <b>Description:</b> {description}
            </p>
            <p>
              <b>Address:</b> {street}
              <br />
              {zipCode} {city}, {country}
            </p>
            <p>
              <b>Opening Hours:</b> {openingHours}
            </p>
            <p>
              <b>Website:</b>{' '}
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                aria-label={website}
                onClick={event => event.stopPropagation()}
              >
                Click here!
              </a>{' '}
            </p>
            <p>
              <b>Prices:</b>{' '}
              {isFreeOfCharge
                ? 'Free of charge.'
                : 'Please check their website.'}
            </p>
          </Details>
        ) : null}
      </MarkerArea>
    </Wrapper>
  )

  function openDetails() {
    setShowDetails(showDetails ? false : true)
  }
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;

  &:hover {
    z-index: 2;
  }
`

const MarkerArea = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`

const Title = styled.p`
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333333;
  min-width: 250px;
  text-align: center;
  font-size: 0.9rem;
  padding: 10px 10px 0 10px;
  border-radius: 25px 25px 0 0;
`

const ButtonBox = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 0 0 25px 25px;

  ${({ showDetails }) =>
    showDetails &&
    css`
      border-radius: 0;
    `}
`

const Button = styled.button`
  all: unset;
  white-space: nowrap;
  background-color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 25px;
  text-align: center;
  color: #333333;
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 250px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333333;
  border-radius: 0 0 25px 25px;
  padding: 0 10px 10px 10px;
  font-size: 0.9rem;
`
