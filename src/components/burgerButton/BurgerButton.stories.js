import BurgerButton from './BurgerButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/BurgerButton',
  component: BurgerButton,
}

const Template = args => <BurgerButton {...args} />

export const Burger = Template.bind({})

Burger.args = {
  onClick: action(burger => console.log(burger)),
  open: false,
}
