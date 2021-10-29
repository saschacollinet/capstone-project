import Oops from './Oops'
import { render, screen } from '@testing-library/react'

describe('Oops', () => {
  it('renders', () => {
    render(<Oops />)

    const headings = screen.getAllByRole('heading')

    expect(headings).toHaveLength(2)
  })

  it('displays the text', () => {
    render(<Oops />)

    const oopsHeading = screen.getByText('Oops!')
    expect(oopsHeading).toBeInTheDocument()

    const nothingHeading = screen.getByText('Nothing has been found here!')
    expect(nothingHeading).toBeInTheDocument()

    const sorryParagraph = screen.getByText('Sorry for the dust!')
    expect(sorryParagraph).toBeInTheDocument()
  })
})
