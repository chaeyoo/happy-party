export interface Party {
  id: number
  date: string
  location: Location
  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  attendCount: number

  organizer: Person
}

export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

export interface Account {
  bankName: string
  accountNumber: string
  kakaopayLink?: string
}
export interface Person {
  name: string
  phoneNumber: string
  account: Account
}
