import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import mainBackground from '../../assets/images/mainBackground.jpg'

export default function FlipCard() {
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const handleFlipCardClick = () => {
    setIsCardFlipped(!isCardFlipped)
  }
  return (
    <Card onClick={handleFlipCardClick}>
      <CardContent isCardFlipped={isCardFlipped}>
        <CardFront>
          <CardTitle>Aquazoo Löbbecke Museum</CardTitle>
          <CardSubtitle>Düsseldorf</CardSubtitle>
        </CardFront>
        <CardBack>
          <CardBody>
            <p>
              <b>Name:</b> Aquazoo Löbbecke Museum
            </p>
            <br />
            <p>
              <b>Description:</b> Das Aquazoo Löbbecke Museum ist eine Einheit
              aus Zoo und Naturkundemuseum.
            </p>
            <br />
            <p>
              <b>Adress:</b> Kaiserswerther Str. 380
              <br />
              40474 Düsseldorf, Germany
            </p>
            <br />
            <p>
              <b>Opening Hours:</b> 10:00 - 18:00
            </p>
            <br />
            <p>
              <b>Website:</b>{' '}
              <a href="https://www.duesseldorf.de/aquazoo.html" target="_blank">
                Click here!
              </a>{' '}
            </p>
            <br />
            <p>
              <b>Prizes:</b> Please check their website!
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
  transition: transform 3s;
  transform-style: preserve-3d;
  ${({ isCardFlipped }) =>
    isCardFlipped &&
    css`
      transform: rotateY(-0.5turn);
    `}
`

const Card = styled.div`
  width: 300px;
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
  font-size: 2.5rem;
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
`
