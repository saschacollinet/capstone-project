import pi from '../../assets/images/pi.svg'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function PiButton() {
  return (
    <NavLink to="/fish">
      <Button aria-label="Toggle the fish" />
    </NavLink>
  )
}

const Button = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-image: url(${pi});
  background-size: cover;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  border: none;
  cursor: pointer;
  width: 10px;
  height: 10px;
`
