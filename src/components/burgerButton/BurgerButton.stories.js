import BurgerButton from './BurgerButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/BurgerButton',
  component: BurgerButton,
  parameters: {
    layout: 'centered',
  },
}

const Template = args => <BurgerButton {...args} />

export const Button = Template.bind({})

Button.args = {
  onClick: action(open => console.log(open)),
  open: false,
}
