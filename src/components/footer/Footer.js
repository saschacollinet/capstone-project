import styled from 'styled-components'

function RenderFooter() {
  return (
    <Footer>
      <Copywright>
        <p>
          © Sascha Collinet | Allaround Family - Your Family Friendly Activity
          Finder 2021
        </p>
      </Copywright>
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
    </Footer>
  )
}

const Footer = styled.div`
  text-align: center;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #2b3636;
  color: #bac1c7;
  padding: 39px 0 42px;
`

const Copywright = styled.div`
  margin-bottom: 20px;
`

const Profiles = styled.div``

const ProfilesList = styled.ul`
  list-style: none;
`

const ProfilesAnchor = styled.a`
  color: #bac1c7;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`

export default RenderFooter
