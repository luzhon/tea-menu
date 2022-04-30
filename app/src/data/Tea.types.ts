export type Tea = {
  img: string
  name: string
  brand: Brand
  type: TeaType[]
  ingredients: string
  caffeine: number
  sealed: boolean
}

export enum TeaType {
  Black = 'Black',
  Green = 'Green',
  Herbal = 'Herbal',
  Oolong = 'Oolong',
  Rooibos = 'Rooibos',
  Puer = 'Puer',
  White = 'White',
}

export enum TeaTypeColor {
  Black = '#FA4A4A',
  Green = '#78AF94',
  Herbal = '#F5CD19',
  Oolong = '#5DA8DA',
  Rooibos = '#FF812C',
  Puer = '#7B71C6',
  White = 'lightgrey',
}

export enum Brand {
  DavidsTea = 'DavidsTea',
  Steepologie = 'Steepologie',
  CelestialSeasonings = 'Celestial Seasonings',
  Stash = 'Stash',
  Twinings = 'Twining\'s',
  TheRepublicOfTea = 'The Republic of Tea',
  OrientalTeaRhyme = 'Oriental Tea Rhyme',
  TheTaoOfTea = 'The Tao of Tea',
  TraderJoes = 'Trader Joes',
  HawaiianIslands = 'Hawaiian Islands Tea Company',
  Tazo = 'Tazo',
  Bigelow = 'Bigelow',
  Itoen = 'Ito En',
  QueenMary = 'Queen Mary',
  NorthEarth = 'North Earth'
}

export type Filters = {
  type?: TeaType | undefined
  brand?: Brand | undefined
  caffeine?: number | undefined
  sealed?: boolean | undefined
  searchTerm?: string | undefined
}
