import MapBox from './MapBox'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/MapBox',
  component: MapBox,
}

const Template = args => <MapBox {...args} />

export const Box = Template.bind({})

Box.args = {
  onClickBookmark: action(bookmark => console.log(bookmark)),
  id: 1,
  name: 'Natur- und Tierpark Brüggen',
  description:
    'Der Natur- und Tierpark Brüggen ist ein Zoo mit umfangreichem Spiel- und Freizeitbereich!',
  street: 'Brachter Str. 98',
  city: 'Brüggen',
  zipCode: '41379',
  country: 'Germany',
  lat: '51.261640',
  lng: '6.181360',
  openingHours: '09:00 - 18:00',
  website: 'https://natur-und-tierpark-brueggen.de',
  isFreeOfCharge: false,
  isBookmarked: false,
}
