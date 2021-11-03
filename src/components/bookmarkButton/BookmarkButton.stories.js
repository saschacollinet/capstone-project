import BookmarkButton from './BookmarkButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/BookmarkButton',
  component: BookmarkButton,
}

const Template = args => <BookmarkButton {...args} />

export const Bookmark = Template.bind({})

Bookmark.args = {
  onClickBookmark: action(bookmark => console.log(bookmark)),
  isBookmarked: false,
}
