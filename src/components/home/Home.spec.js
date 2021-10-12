import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('Home', () => {
  it('renders', () => {
    render(<Home />)

    const headings = screen.getAllByRole('heading')

    expect(headings).toHaveLength(2)
  })

  it('displays the text', () => {
    render(<Home />)

    const heading1 = screen.getByText('Welcome kids and parents!')

    expect(heading1).toBeInTheDocument()

    const heading2 = screen.getByText('This app is for you!')

    expect(heading2).toBeInTheDocument()

    const paragraph1 = screen.getByText(
      'Add and find family friendly activities all around you.'
    )

    expect(paragraph1).toBeInTheDocument()

    const paragraph2 = screen.getByText('Display them as a list or on a map.')

    expect(paragraph2).toBeInTheDocument()

    const paragraph3 = screen.getByText(
      'Press on a card to show full details of the activity.'
    )

    expect(paragraph3).toBeInTheDocument()
  })
})
