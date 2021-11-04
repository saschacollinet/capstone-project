import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useHistory } from 'react-router'

export default function CreateActivityForm({ onCreateNewActivity }) {
  const [characterCount, setCharacterCount] = useState(0)

  const history = useHistory()

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name of Activity:
        <input type="text" name="name" required autoComplete="Off" />
      </Label>
      <Label>
        Description (max. 100 chars):
        <textarea
          name="description"
          required
          autoComplete="Off"
          rows="4"
          maxLength="100"
          onChange={event => setCharacterCount(event.target.value.length)}
        />
      </Label>
      <p>Number of characters used: {characterCount}</p>
      <Label>
        Street:
        <input type="text" name="street" required autoComplete="Off" />
      </Label>
      <Label>
        Zip Code:
        <input type="text" name="zipCode" required autoComplete="Off" />
      </Label>
      <Label>
        City:
        <input type="text" name="city" required autoComplete="Off" />
      </Label>
      <Label>
        Country:
        <input type="text" name="country" required autoComplete="Off" />
      </Label>
      <Label>
        Latitude:
        <input type="text" name="latitude" required autoComplete="Off" />
      </Label>
      <Label>
        Longitude:
        <input type="text" name="longitude" required autoComplete="Off" />
      </Label>
      <Label>
        Opening Hours:
        <input type="text" name="openingHours" required autoComplete="Off" />
      </Label>
      <Label>
        Website:
        <input type="text" name="website" required autoComplete="Off" />
      </Label>
      <div>
        <p>Free of Charge:</p>
        <RadioButtonBox>
          <Label>
            Yes:
            <input type="radio" name="isFreeOfCharge" value="true" required />
          </Label>
          <Label>
            No:
            <input type="radio" name="isFreeOfCharge" value="false" required />
          </Label>
        </RadioButtonBox>
      </div>
      <Button>Submit</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target

    const {
      name,
      description,
      street,
      zipCode,
      city,
      country,
      latitude,
      longitude,
      openingHours,
      website,
      isFreeOfCharge,
    } = form.elements

    onCreateNewActivity({
      id: nanoid(),
      name: name.value,
      description: description.value,
      street: street.value,
      city: city.value,
      zipCode: zipCode.value,
      country: country.value,
      lat: latitude.value,
      lng: longitude.value,
      openingHours: openingHours.value,
      website: website.value,
      isFreeOfCharge: JSON.parse(isFreeOfCharge.value),
      isBookmarked: false,
    })

    form.reset()

    history.push('/list')
  }
}

const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  padding: 1.3rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 1rem;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.06rem;
`

const RadioButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
`

const Button = styled.button`
  padding: 5px 0;
  border-radius: 25px;
  background-color: white;
  color: #333;
`
