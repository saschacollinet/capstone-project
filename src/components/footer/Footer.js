import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <Wrapper>
      <Copyright>
        <p>
          © Sascha Collinet | Allaround Family - Your Family Friendly Activity
          Finder 2021
        </p>
      </Copyright>
      <Profiles>
        <ProfilesList>
          <li>
            <ProfilesAnchor
              href="https://github.com/saschacollinet"
              target="_blank"
            >
              GitHub
            </ProfilesAnchor>
          </li>
          <li>
            <ProfilesAnchor
              href="https://www.linkedin.com/in/sascha-collinet/"
              target="_blank"
            >
              LinkedIn
            </ProfilesAnchor>
          </li>
          <li>
            <ProfilesAnchor
              href="https://www.xing.com/profile/Sascha_Collinet/cv"
              target="_blank"
            >
              Xing
            </ProfilesAnchor>
          </li>
        </ProfilesList>
      </Profiles>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  text-align: center;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: #333;
`

const Copyright = styled.div`
  margin-top: 0.6rem;
`

const Profiles = styled.div`
  margin-bottom: 0.6rem;
`

const ProfilesList = styled.ul`
  list-style: none;
`

const ProfilesAnchor = styled.a`
  color: black;
`
