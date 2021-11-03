import FlipCard from './FlipCard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/FlipCard',
  component: FlipCard,
}

const Template = args => <FlipCard {...args} />

export const Card = Template.bind({})

Card.args = {
  handleFlipCard: action(flip => console.log(flip)),
  onClickBookmark: action(bookmark => console.log(bookmark)),
}
