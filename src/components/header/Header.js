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
  text-align: center;
  z-index: 2;
  position: fixed;
  top: 0;
`

export default RenderHeader
