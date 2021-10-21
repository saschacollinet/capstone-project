import { nanoid } from 'nanoid'
import styled from 'styled-components'

export default function CreateActivityForm({
  initialActivities,
  setActivities,
}) {
  function createNewActivity({
    name,
    description,
    street,
    zipCode,
    city,
    country,
    openingHours,
    website,
    isFreeOfCharge,
  }) {
    const newActivity = [
      ...initialActivities,
      {
        id: nanoid(),
        name: name,
        description: description,
        street: street,
        city: city,
        zipCode: zipCode,
        country: country,
        openingHours: openingHours,
        website: website,
        isFreeOfCharge: isFreeOfCharge,
      },
    ]
    setActivities(newActivity)
  }

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
      openingHours,
      website,
      isFreeOfCharge,
    } = form.elements

    createNewActivity({
      name: name.value,
      description: description.value,
      street: street.value,
      city: city.value,
      zipCode: zipCode.value,
      country: country.value,
      openingHours: openingHours.value,
      website: website.value,
      isFreeOfCharge: JSON.parse(isFreeOfCharge.value),
    })
    form.reset()
  }

  return (
    <CreateForm
      onSubmit={event => {
        handleSubmit(event)
      }}
    >
      <CreateFormLabel>
        Name of Activity:
        <input type="text" name="name" required autoComplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Description (max. 100 chars):
        <textarea
          name="description"
          required
          autoComplete="Off"
          rows="4"
          maxLength="100"
        />
      </CreateFormLabel>
      <CreateFormLabel>
        Street:
        <input type="text" name="street" required autoComplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Zip Code:
        <input type="text" name="zipCode" required autoComplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        City:
        <input type="text" name="city" required autoComplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Country:
        <input type="text" name="country" required autoComplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Opening Hours:
        <input
          type="text"
          name="openingHours"
          required
          autoComplete="Off"
        ></input>
      </CreateFormLabel>
      <CreateFormLabel>
        Website:
        <input type="text" name="website" required autoComplete="Off" />
      </CreateFormLabel>
      <div>
        <p>Free of Charge:</p>
        <RadioButtonBox>
          <CreateFormLabel>
            Yes:
            <input type="radio" name="isFreeOfCharge" value="true" required />
          </CreateFormLabel>
          <CreateFormLabel>
            No:
            <input type="radio" name="isFreeOfCharge" value="false" required />
          </CreateFormLabel>
        </RadioButtonBox>
      </div>
      <SubmitButton>Submit</SubmitButton>
    </CreateForm>
  )
}

const CreateForm = styled.form`
  background-color: rgba(255, 255, 255, 0.7);
  color: #333;
  padding: 15px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 1rem;
`

const CreateFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const RadioButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
`

const SubmitButton = styled.button`
  padding: 5px 0;
  border-radius: 25px;
  background-color: white;
  color: #333;
`
