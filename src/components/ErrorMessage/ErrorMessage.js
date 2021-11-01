import styled from 'styled-components/macro'

export default function Oops() {
  return (
    <Wrapper>
      <h2>Oops!</h2>
      <h3>Nothing has been found here!</h3>
      <p>Sorry for the dust!</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  padding: 1.3rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 300px;
  color: #333;
`
