import styled from 'styled-components'

function RenderHeader() {
  return (
    <Header>
      <h1>Allaround Family</h1>
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  padding: 20px 0px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  color: whitesmoke;
`

export default RenderHeader
