import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const logo = screen.getByRole('img')

    expect(logo).toBeInTheDocument()
  })
})
