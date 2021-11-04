import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(6)

    const logo = screen.getByAltText('Allaround Family')
    expect(logo).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})
