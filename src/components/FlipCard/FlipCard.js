import BookmarkButton from '../BookmarkButton/BookmarkButton'
import mainBackground from '../../assets/images/mainBackground.jpg'
import styled, { css } from 'styled-components/macro'
import { useState } from 'react'

export default function FlipCard({
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
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const handleFlipCardClick = () => {
    setIsCardFlipped(!isCardFlipped)
  }

  return (
    <Card onClick={handleFlipCardClick}>
      <CardContent isCardFlipped={isCardFlipped}>
        <CardFront>
          <BookmarkButton
            id={id}
            isBookmarked={isBookmarked}
            onClickBookmark={onClickBookmark}
          />
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{city}</CardSubtitle>
        </CardFront>
        <CardBack>
          <BookmarkButton
            id={id}
            isBookmarked={isBookmarked}
            onClickBookmark={onClickBookmark}
          />
          <CardBody>
            <p>
              <b>Name:</b> {name}
            </p>
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
          </CardBody>
        </CardBack>
      </CardContent>
    </Card>
  )
}

const CardContent = styled.div`
  text-align: center;
  position: relative;
  padding: 15em 5em;
  transition: transform 2s;
  transform-style: preserve-3d;

  ${({ isCardFlipped }) =>
    isCardFlipped &&
    css`
      transform: rotateY(-0.5turn);
    `}
`

const Card = styled.div`
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
`

const CardSide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: grid;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  background-image: url(${mainBackground});
  background-size: cover;
  background-blend-mode: overlay;
  color: #333;
  border-radius: 25px;
`

const CardFront = styled(CardSide)`
  padding: 5em 2em;

  &::before {
    content: '';
    position: absolute;
    top: 1rem;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    border: 3px solid currentColor;
    transform: translateZ(3rem);
    border-radius: 25px;
  }
`

const CardTitle = styled.h3`
  font-size: 1.6rem;
  transform: translateZ(9rem);
  order: 2;
  text-transform: uppercase;
`

const CardSubtitle = styled.p`
  transform: translateZ(6rem);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.7;
`

const CardBack = styled(CardSide)`
  padding: 2em;
  transform: rotateY(0.5turn);
`

const CardBody = styled.div`
  transform: translateZ(6rem);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.6;
  display: grid;
  gap: 1rem;
`
