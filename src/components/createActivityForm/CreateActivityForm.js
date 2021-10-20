import styled from 'styled-components'

export default function CreateActivityForm() {
  return (
    <CreateForm>
      <CreateFormLabel>
        Name of Activity:
        <input type="text" name="name" required autocomplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Description (max. 100 chars):
        <textarea
          name="description"
          required
          autocomplete="Off"
          rows="4"
          maxlength="100"
        />
      </CreateFormLabel>
      <CreateFormLabel>
        Street:
        <input type="text" name="street" required autocomplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Zip Code:
        <input type="text" name="zipCode" required autocomplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        City:
        <input type="text" name="city" required autocomplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Country:
        <input type="text" name="country" required autocomplete="Off" />
      </CreateFormLabel>
      <CreateFormLabel>
        Opening Hours:
        <input
          type="text"
          name="openingHours"
          required
          autocomplete="Off"
        ></input>
      </CreateFormLabel>
      <CreateFormLabel>
        Website:
        <input type="text" name="website" required autocomplete="Off" />
      </CreateFormLabel>
      <div>
        <p>Free of Charge:</p>
        <RadioButtonBox>
          <CreateFormLabel>
            Yes:
            <input type="radio" name="isFreeOfCharge" required />
          </CreateFormLabel>
          <CreateFormLabel>
            No:
            <input type="radio" name="isFreeOfCharge" required />
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
