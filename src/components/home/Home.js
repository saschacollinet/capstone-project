import styled from 'styled-components'

function RenderHome() {
  return (
    <Home>
      <HeadlineTwo>Welcome kids and parents!</HeadlineTwo>
      <HeadlineThree>This app is for you!</HeadlineThree>
      <Paragraph>
        Add and find family friendly activities all around you.
      </Paragraph>
      <Paragraph>Display them as a list or on a map.</Paragraph>
      <Paragraph>
        Press on a card to show full details of the activity.
      </Paragraph>
    </Home>
  )
}

const Home = styled.section`
  min-width: 300px;
  margin-top: 100px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  padding: 0px 10px;
`

const HeadlineTwo = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`

const HeadlineThree = styled.h3`
  margin-bottom: 20px;
`

const Paragraph = styled.p`
  margin-bottom: 20px;
`

export default RenderHome
