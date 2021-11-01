import BookmarkButton from './BookmarkButton'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('BookmarkButton', () => {
  const mockOnClickBookmark = jest.fn()

  it('renders', () => {
    render(<BookmarkButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument
  })

  it('calls a function when the user clicks the button', () => {
    render(<BookmarkButton onClickBookmark={mockOnClickBookmark} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockOnClickBookmark).toHaveBeenCalled()
  })
})
