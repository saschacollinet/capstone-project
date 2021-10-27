import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import SearchBox from './SearchBox'

describe('SearchBox', () => {
  const mockOnChange = jest.fn()

  it('renders', () => {
    render(
      <Router>
        <SearchBox />
      </Router>
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls a function when the user types something in the search field and the input value changes', () => {
    render(
      <Router>
        <SearchBox onChange={mockOnChange} />
      </Router>
    )

    const inputEl = screen.getByLabelText('Search box')
    userEvent.type(inputEl, 'f')
    expect(mockOnChange).toHaveBeenCalled()
  })
})
