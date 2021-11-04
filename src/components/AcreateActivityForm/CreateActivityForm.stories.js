import CreateActivityForm from './CreateActivityForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/CreateActivityForm',
  component: CreateActivityForm,
}

const Template = args => <CreateActivityForm {...args} />

export const Form = Template.bind({})

Form.args = {
  onCreateNewActivity: action(create => console.log(create)),
}
