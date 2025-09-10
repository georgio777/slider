export interface Event {
  eventDate: number
  eventDescription: string
}

export interface SliderItem {
  id: number
  name: string
  period: [number, number]
  events: Event[]
}

export type SliderData = SliderItem[]