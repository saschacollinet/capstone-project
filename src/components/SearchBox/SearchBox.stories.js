import SearchBox from './SearchBox'

export default {
  title: 'Component/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
}

const Template = args => <SearchBox />

export const SearchBoxArea = Template.bind({})
