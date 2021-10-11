import styled from 'styled-components'

function Header() {
  return (
    <StyledHeader>
      <h1>Allaround Family</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  width: 100%;
  padding: 20px 0px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
`

export default Header
