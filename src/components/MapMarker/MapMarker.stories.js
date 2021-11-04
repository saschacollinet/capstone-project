import MapMarker from './MapMarker'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/MapMarker',
  component: MapMarker,
}

const Template = args => <MapMarker {...args} />

export const Marker = Template.bind({})

Marker.args = {
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
