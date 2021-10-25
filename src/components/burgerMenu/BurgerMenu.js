import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Menu({ open, setOpen }) {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/" open={open} onClick={() => setOpen(!open)}>
        Home
      </StyledLink>
      <StyledLink to="/list" open={open} onClick={() => setOpen(!open)}>
        Activity List
      </StyledLink>
      <StyledLink to="/create" open={open} onClick={() => setOpen(!open)}>
        Add Activity
      </StyledLink>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

const StyledLink = styled(NavLink)`
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: 700;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`
