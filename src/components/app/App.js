import { useState } from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'

const MOCK_DATA = [
  {
    id: 1,
    name: 'Natur- und Tierpark Brüggen',
    street: 'Brachter Str. 98',
    zipCode: 41379,
    city: 'Brüggen',
    country: 'Germany',
    openingHours: '09:00 - 18:00',
    website: 'https://natur-und-tierpark-brueggen.de',
    description:
      'Der Natur- und Tierpark Brüggen ist ein Zoo mit umfangreichem Spiel- und Freizeitbereich im nordrhein-westfälischen Brüggen. Er liegt rund zwei Kilometer nördlich des Ortszentrums, westlich der Bundesstraße 221, etwa vier Kilometer von der niederländischen Grenze entfernt.',
    freeOfCharge: false,
  },
  {
    id: 2,
    name: 'Freizeitpark Efteling',
    street: 'Europalaan 1',
    zipCode: 5171,
    city: 'KW Kaatsheuvel',
    country: 'Netherlands',
    openingHours: '10:00 - 18:00',
    website: 'https://www.efteling.com/',
    description:
      'Efteling, der märchenhafteste Freizeitpark Europas, ist eine besondere Welt für die ganze Familie! Er liegt bei Kaatsheuvel, einer Kleinstadt in der Gemeinde Loon op Zand, benachbart zur Großstadt Tilburg.',
    freeOfCharge: false,
  },
  {
    id: 3,
    name: 'Bunter Garten',
    street: 'Bettrather Str.',
    zipCode: 41061,
    city: 'Mönchengladbach',
    country: 'Germany',
    openingHours: 'permanent',
    website: 'https://buntergarten.de/',
    description:
      'Der Bunte Garten ist ein Stadtpark in der Innenstadt von Mönchengladbach.',
    freeOfCharge: true,
  },
  {
    id: 4,
    name: 'Aquazoo Löbbecke Museum',
    street: 'Kaiserswerther Str. 380',
    zipCode: 40474,
    city: 'Düsseldorf',
    country: 'Germany',
    openingHours: '10:00 - 18:00',
    website: 'https://www.duesseldorf.de/aquazoo.html',
    description:
      'Das Aquazoo Löbbecke Museum ist eine Einheit aus Zoo und Naturkundemuseum unter Trägerschaft der Stadt Düsseldorf. Es wurde im Jahr 1987 im Nordpark unter dem Namen Löbbecke-Museum + Aquazoo eröffnet.',
    freeOfCharge: false,
  },
]

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
