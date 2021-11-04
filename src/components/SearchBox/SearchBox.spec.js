import SearchBox from './SearchBox'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchBox', () => {
  const mockOnChange = jest.fn()

  it('renders', () => {
    render(
      <Router>
        <SearchBox />
      </Router>
    )

    const inputEl = screen.getByLabelText('Search box')
    expect(inputEl).toBeInTheDocument()

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
