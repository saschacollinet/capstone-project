import BurgerMenu from './BurgerMenu'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

describe('BurgerMenu', () => {
  it('renders', () => {
    render(
      <Router>
        <BurgerMenu />
      </Router>
    )

    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(5)
  })

  it('displays the text', () => {
    render(
      <Router>
        <BurgerMenu />
      </Router>
    )

    const home = screen.getByText('Home')
    expect(home).toBeInTheDocument()

    const activities = screen.getByText('Activities')
    expect(activities).toBeInTheDocument()

    const bookmarks = screen.getByText('Bookmarks')
    expect(bookmarks).toBeInTheDocument()

    const addActivity = screen.getByText('Add Activity')
    expect(addActivity).toBeInTheDocument()
  })
})
