import BurgerMenu from './BurgerMenu'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/BurgerMenu',
  component: BurgerMenu,
}

const Template = args => <BurgerMenu {...args} />

export const Menu = Template.bind({})

Menu.args = {
  onClick: action(menu => console.log(menu)),
  open: false,
}
