import BurgerButton from './BurgerButton'
import { render, screen } from '@testing-library/react'

describe('BurgerButton', () => {
  it('renders', () => {
    render(<BurgerButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument
  })
})
