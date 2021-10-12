import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />)

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()

    const listItems = screen.getAllByRole('listitem')

    expect(listItems).toHaveLength(3)

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(3)
  })

  it('displays the text', () => {
    render(<Footer />)

    const paragraph1 = screen.getByText(
      '© Sascha Collinet | Allaround Family - Your Family Friendly Activity Finder 2021'
    )

    expect(paragraph1).toBeInTheDocument()

    const anchor1 = screen.getByText('GitHub')

    expect(anchor1).toBeInTheDocument()

    const anchor2 = screen.getByText('LinkedIn')

    expect(anchor2).toBeInTheDocument()

    const anchor3 = screen.getByText('Xing')

    expect(anchor3).toBeInTheDocument()
  })
})
