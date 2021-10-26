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

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    const logo = screen.getByAltText('Allaround Family')
    expect(logo).toBeInTheDocument()
  })
})
