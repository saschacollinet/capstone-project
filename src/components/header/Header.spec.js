import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)

    const logo = screen.getByAltText('Allaround Family')
    expect(logo).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})
