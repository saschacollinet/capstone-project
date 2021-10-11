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
  height: auto;
  padding: 20px 0px;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
`

export default Header
