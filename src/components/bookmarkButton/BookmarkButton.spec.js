import BookmarkButton from './BookmarkButton'
import { render, screen } from '@testing-library/react'

describe('BookmarkButton', () => {
  it('renders', () => {
    render(<BookmarkButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument
  })
})
