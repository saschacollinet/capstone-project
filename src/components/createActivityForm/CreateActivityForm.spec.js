import { render, screen } from '@testing-library/react'
import CreateActivityForm from './CreateActivityForm'

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

  it('has a paragraph "Free of Charge:"', () => {
    render(<CreateActivityForm />)

    const freeOfChargeParagraph = screen.getByText('Free of Charge:')
    expect(freeOfChargeParagraph).toBeInTheDocument()
  })
})
