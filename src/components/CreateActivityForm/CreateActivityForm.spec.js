import CreateActivityForm from './CreateActivityForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('CreateActivityForm', () => {
  it('has ten required input fields', () => {
    render(<CreateActivityForm />)

    const inputElName = screen.getByLabelText('Name of Activity:')
    expect(inputElName).toBeRequired()

    const inputElDescription = screen.getByLabelText(
      'Description (max. 100 chars):'
    )
    expect(inputElDescription).toBeRequired()

    const inputElStreet = screen.getByLabelText('Street:')
    expect(inputElStreet).toBeRequired()

    const inputElZipCode = screen.getByLabelText('Zip Code:')
    expect(inputElZipCode).toBeRequired()

    const inputElCity = screen.getByLabelText('City:')
    expect(inputElCity).toBeRequired()

    const inputElCountry = screen.getByLabelText('Country:')
    expect(inputElCountry).toBeRequired()

    const inputElLatitude = screen.getByLabelText('Latitude:')
    expect(inputElLatitude).toBeRequired()

    const inputElLongitude = screen.getByLabelText('Longitude:')
    expect(inputElLongitude).toBeRequired()

    const inputElOpeningHours = screen.getByLabelText('Opening Hours:')
    expect(inputElOpeningHours).toBeRequired()

    const inputElWebsite = screen.getByLabelText('Website:')
    expect(inputElWebsite).toBeRequired()

    const inputElYes = screen.getByLabelText('Yes:')
    expect(inputElYes).toBeRequired()

    const inputElNo = screen.getByLabelText('No:')
    expect(inputElNo).toBeRequired()
  })

  it('has a textarea "Description (max. 100 chars):" with a maximum length of 100 Characters', () => {
    render(<CreateActivityForm />)

    const inputElDescription = screen.getByLabelText(
      'Description (max. 100 chars):'
    )
    expect(inputElDescription).toHaveAttribute('maxLength', '100')
  })

  it('has a textarea "Description (max. 100 chars):" with 4 rows', () => {
    render(<CreateActivityForm />)

    const inputElDescription = screen.getByLabelText(
      'Description (max. 100 chars):'
    )
    expect(inputElDescription).toHaveAttribute('rows', '4')
  })

  it('has a paragraph "Free of Charge:"', () => {
    render(<CreateActivityForm />)

    const freeOfChargeParagraph = screen.getByText('Free of Charge:')
    expect(freeOfChargeParagraph).toBeInTheDocument()
  })

  it('works: text written into the input fields will be sent to the onCreateNewActivity function', () => {
    const mockOnCreateNewActivity = jest.fn()

    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <CreateActivityForm onCreateNewActivity={mockOnCreateNewActivity} />
      </Router>
    )

    const inputName = screen.getByLabelText('Name of Activity:')
    userEvent.type(inputName, 'Aquazoo Löbbecke Museum')

    const inputDescription = screen.getByLabelText(
      'Description (max. 100 chars):'
    )
    userEvent.type(
      inputDescription,
      'Das Aquazoo Löbbecke Museum ist eine Einheit aus Zoo und Naturkundemuseum.'
    )

    const inputStreet = screen.getByLabelText('Street:')
    userEvent.type(inputStreet, 'Kaiserswerther Str. 380')

    const inputZipCode = screen.getByLabelText('Zip Code:')
    userEvent.type(inputZipCode, '40474')

    const inputCity = screen.getByLabelText('City:')
    userEvent.type(inputCity, 'Düsseldorf')

    const inputCountry = screen.getByLabelText('Country:')
    userEvent.type(inputCountry, 'Germany')

    const inputLatitude = screen.getByLabelText('Latitude:')
    userEvent.type(inputLatitude, '51.25667175577751')

    const inputLongitude = screen.getByLabelText('Longitude:')
    userEvent.type(inputLongitude, '6.750102542689271')

    const inputOpeningHours = screen.getByLabelText('Opening Hours:')
    userEvent.type(inputOpeningHours, '10:00 - 18:00')

    const inputWebsite = screen.getByLabelText('Website:')
    userEvent.type(inputWebsite, 'https://www.duesseldorf.de/aquazoo.html')

    const inputYes = screen.getByLabelText('Yes:')
    userEvent.click(inputYes)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(mockOnCreateNewActivity).toHaveBeenCalledWith({
      id: expect.any(String),
      name: 'Aquazoo Löbbecke Museum',
      description:
        'Das Aquazoo Löbbecke Museum ist eine Einheit aus Zoo und Naturkundemuseum.',
      street: 'Kaiserswerther Str. 380',
      city: 'Düsseldorf',
      zipCode: '40474',
      country: 'Germany',
      lat: '51.25667175577751',
      lng: '6.750102542689271',
      openingHours: '10:00 - 18:00',
      website: 'https://www.duesseldorf.de/aquazoo.html',
      isFreeOfCharge: true,
      isBookmarked: false,
    })
  })
})
