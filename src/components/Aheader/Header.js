import BurgerButton from '../AburgerButton/BurgerButton'
import BurgerMenu from '../AburgerMenu/BurgerMenu'
import SearchBox from '../AsearchBox/SearchBox'
import logo from '../../assets/images/logo.svg'
import styled from 'styled-components/macro'
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useClickOutside from '../../hooks/useClickOutside'

export default function Header({ searchTerm, onChange }) {
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
      <SearchBox searchTerm={searchTerm} onChange={onChange} />
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
