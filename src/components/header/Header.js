import BurgerButton from '../burgerButton/BurgerButton'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import SearchBox from '../searchBox/SearchBox'
import styled from 'styled-components/macro'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside'

export default function Header() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useClickOutside(node, () => setOpen(false))
  return (
    <Wrapper>
      <h1>
        <NavLink to="/">
          <Logo src={logo} alt="Allaround Family" />
        </NavLink>
      </h1>
      <SearchBox />
      <div ref={node}>
        <BurgerButton open={open} onClick={() => setOpen(!open)} />
        <BurgerMenu open={open} onClick={() => setOpen(!open)} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  width: 100%;
  z-index: 8;
  position: fixed;
  top: 0;
`

const Logo = styled.img`
  height: 100px;
  padding: 0.5rem;
`
