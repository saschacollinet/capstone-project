import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const h1 = screen.getByRole('heading')

    expect(h1).toBeInTheDocument()
  })

  it('displays the text Allaround Family', () => {
    render(<Header />)

    const text = screen.getByText('Allaround Family')

    expect(text).toBeInTheDocument()
  })
})
