export type Tea = {
    img: string,
    name: string,
    brand: Brand,
    type: TeaType[]
    ingredients: string,
    caffeine: number,
    sealed: boolean,
} 

export enum TeaType {
    Black = "Black",
    Green = "Green",
    Herbal = "Herbal",
    Oolong = "Oolong",
    Rooibos = "Rooibos",
    Puer = "Puer",
    White = "White"
}

export enum Brand {
    DavidsTea = "DavidsTea",
    Steepologie = "Steepologie",
    CelestialSeasonings = "Celestial Seasonings",
    Stash = "Stash",
    Twinings = "Twinings",
}