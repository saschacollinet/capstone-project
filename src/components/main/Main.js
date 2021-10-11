import styled from 'styled-components'
import mainBackground from '../../assets/images/mainBackground.jpg'

function RenderMain({ children }) {
  return <Main>{children}</Main>
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${mainBackground});
  background-size: cover;
  background-color: darkgreen;
  background-blend-mode: overlay;
`

export default RenderMain
