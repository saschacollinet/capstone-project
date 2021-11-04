import Home from './Home'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders', () => {
    render(<Home />)

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(2)
  })

  it('displays the text', () => {
    render(<Home />)

    const welcomeHeading = screen.getByText('Welcome kids and parents!')
    expect(welcomeHeading).toBeInTheDocument()

    const thisAppHeading = screen.getByText('This app is for you!')
    expect(thisAppHeading).toBeInTheDocument()

    const addAndFindParagraph = screen.getByText(
      'Add and find family friendly activities all around you.'
    )
    expect(addAndFindParagraph).toBeInTheDocument()

    const displayThemParagraph = screen.getByText(
      'Display them as a list or on a map.'
    )
    expect(displayThemParagraph).toBeInTheDocument()

    const pressParagraph = screen.getByText(
      'Press on a card to show full details of the activity.'
    )
    expect(pressParagraph).toBeInTheDocument()
  })
})
