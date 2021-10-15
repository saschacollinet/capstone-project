import styled from 'styled-components/macro'
import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <Wrapper>
      <Logo src={logo} alt="Allaround Family logo" />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  width: 100%;
  /* padding: 1.3rem 0; */
  z-index: 2;
  position: fixed;
  top: 0;
`

const Logo = styled.img`
  height: 80px;
  padding: 0.5rem;
`
