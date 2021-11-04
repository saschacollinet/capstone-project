import MapMarker from './MapMarker'
import { render, screen } from '@testing-library/react'

describe('MapMarker', () => {
  const name = 'Natur- und Tierpark Brüggen'

  it('renders', () => {
    render(<MapMarker name={name} />)

    const marker = screen.getByRole('img')
    expect(marker).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('displays the text', () => {
    render(<MapMarker name={name} />)

    const NameContent = screen.getByText('Natur- und Tierpark Brüggen')
    expect(NameContent).toBeInTheDocument()
  })
})
