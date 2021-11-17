import Footer from './Footer'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Footer', () => {
  it('renders', () => {
    render(
      <Router>
        <Footer />
      </Router>
    )

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
  })

  it('displays the text', () => {
    render(
      <Router>
        <Footer />
      </Router>
    )

    const copyright = screen.getByText(
      '© Sascha Collinet | Allaround Family - Your Family Friendly Activity Finder 2021'
    )
    expect(copyright).toBeInTheDocument()

    const gitHubLink = screen.getByText('GitHub')
    expect(gitHubLink).toBeInTheDocument()

    const linkedInLink = screen.getByText('LinkedIn')
    expect(linkedInLink).toBeInTheDocument()

    const xingLink = screen.getByText('Xing')
    expect(xingLink).toBeInTheDocument()
  })
})
