import { render, screen } from '@testing-library/react'
import FlipCard from './FlipCard'

describe('FlipCard', () => {
  const name = 'Natur- und Tierpark Brüggen'
  const description =
    'Der Natur- und Tierpark Brüggen ist ein Zoo mit umfangreichem Spiel- und Freizeitbereich!'
  const street = 'Brachter Str. 98'
  const city = 'Brüggen'
  const zipCode = 41379
  const country = 'Germany'
  const openingHours = '09:00 - 18:00'
  const website = 'https://natur-und-tierpark-brueggen.de'
  const freeOfCharge = false

  it('renders', () => {
    render(
      <FlipCard
        name={name}
        description={description}
        street={street}
        city={city}
        zipCode={zipCode}
        country={country}
        openingHours={openingHours}
        website={website}
        freeOfCharge={freeOfCharge}
      />
    )

    const title = screen.getByRole('heading')

    expect(title).toBeInTheDocument()

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
  })

  it('displays the text', () => {
    render(
      <FlipCard
        name={name}
        description={description}
        street={street}
        city={city}
        zipCode={zipCode}
        country={country}
        openingHours={openingHours}
        website={website}
        freeOfCharge={freeOfCharge}
      />
    )

    const titleAndNameContent = screen.getAllByText(
      'Natur- und Tierpark Brüggen'
    )

    expect(titleAndNameContent).toHaveLength(2)

    const nameTerm = screen.getByText('Name:')

    expect(nameTerm).toBeInTheDocument()

    const subtitle = screen.getByText('Brüggen')

    expect(subtitle).toBeInTheDocument()

    const descrioptionTerm = screen.getByText('Description:')

    expect(descrioptionTerm).toBeInTheDocument()

    const descriptionContent = screen.getByText(
      'Der Natur- und Tierpark Brüggen ist ein Zoo mit umfangreichem Spiel- und Freizeitbereich!'
    )

    expect(descriptionContent).toBeInTheDocument()

    const addressTerm = screen.getByText('Address:')

    expect(addressTerm).toBeInTheDocument()

    const openingHoursTerm = screen.getByText('Opening Hours:')

    expect(openingHoursTerm).toBeInTheDocument()

    const openingHoursContent = screen.getByText('09:00 - 18:00')

    expect(openingHoursContent).toBeInTheDocument()

    const websiteTerm = screen.getByText('Website:')

    expect(websiteTerm).toBeInTheDocument()

    const websiteContent = screen.getByText('Click here!')

    expect(websiteContent).toBeInTheDocument()

    const prizesTerm = screen.getByText('Prizes:')

    expect(prizesTerm).toBeInTheDocument()

    const prizesContent = screen.getByText('Please check their website.')

    expect(prizesContent).toBeInTheDocument()
  })
})
