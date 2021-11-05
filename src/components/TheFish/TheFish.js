import fish from '../../assets/images/fish.png'
import styled from 'styled-components/macro'

export default function TheFish() {
  return (
    <Wrapper>
      <Image src={fish} alt="fish" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-content: center;
  justify-content: center;
`

const Image = styled.img`
  height: 400px;
`
