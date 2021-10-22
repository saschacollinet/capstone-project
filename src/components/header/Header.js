import styled from 'styled-components/macro'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <Wrapper>
      <h1>
        <StyledLink to="/">
          <Logo src={logo} alt="Allaround Family" />
        </StyledLink>
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  width: 100%;
  z-index: 9;
  position: fixed;
  top: 0;
`

const StyledLink = styled(NavLink)`
  &:focus {
    outline: none;
  }
`

const Logo = styled.img`
  height: 100px;
  padding: 0.5rem;
`
