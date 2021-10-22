import styled from 'styled-components/macro'

export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/">Activity List</a>
      <a href="/">Add Activity</a>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  z-index: 8;
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

  a {
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
  }
`
