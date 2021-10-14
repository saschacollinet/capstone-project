import styled from 'styled-components/macro'

export default function Header() {
  return (
    <Wrapper>
      <h1>Allaround Family</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  padding: 1.3rem 0;
  text-align: center;
  z-index: 2;
  position: fixed;
  top: 0;
`
