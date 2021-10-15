import styled from 'styled-components/macro'

export default function Home() {
  return (
    <Wrapper>
      <h2>Welcome kids and parents!</h2>
      <h3>This app is for you!</h3>
      <p>Add and find family friendly activities all around you.</p>
      <p>Display them as a list or on a map.</p>
      <p>Press on a card to show full details of the activity.</p>
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
`
