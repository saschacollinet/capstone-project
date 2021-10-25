import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'

describe('BurgerMenu', () => {
  it('renders', () => {
    render(
      <Router>
        <BurgerMenu />
      </Router>
    )

    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(3)
  })

  it('displays the text', () => {
    render(
      <Router>
        <BurgerMenu />
      </Router>
    )

    const home = screen.getByText('Home')
    expect(home).toBeInTheDocument()

    const activityList = screen.getByText('Activity List')
    expect(activityList).toBeInTheDocument()

    const addActivity = screen.getByText('Add Activity')
    expect(addActivity).toBeInTheDocument()
  })
})
