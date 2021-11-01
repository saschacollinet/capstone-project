import ErrorMessage from './ErrorMessage'
import { render, screen } from '@testing-library/react'

describe('ErrorMessage', () => {
  it('renders', () => {
    render(<ErrorMessage />)

    const headings = screen.getAllByRole('heading')

    expect(headings).toHaveLength(2)
  })

  it('displays the text', () => {
    render(<ErrorMessage />)

    const oopsHeading = screen.getByText('Oops!')
    expect(oopsHeading).toBeInTheDocument()

    const nothingHeading = screen.getByText('Nothing has been found here!')
    expect(nothingHeading).toBeInTheDocument()

    const sorryParagraph = screen.getByText('Sorry for the dust!')
    expect(sorryParagraph).toBeInTheDocument()
  })
})
