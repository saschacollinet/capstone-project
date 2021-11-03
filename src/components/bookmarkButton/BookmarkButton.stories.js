import BookmarkButton from './BookmarkButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/BookmarkButton',
  component: BookmarkButton,
  parameters: {
    layout: 'centered',
  },
}

const Template = args => <BookmarkButton {...args} />

export const Button = Template.bind({})

Button.args = {
  onClickBookmark: action(bookmark => console.log(bookmark)),
  isBookmarked: false,
}
