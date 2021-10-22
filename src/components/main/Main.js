import styled from 'styled-components/macro'
import mainBackground from '../../assets/images/mainBackground.jpg'

export default function Main({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${mainBackground});
  background-size: cover;
  background-attachment: fixed;
  padding: 7.6rem 0 7.3rem;
  overflow: auto;
`
