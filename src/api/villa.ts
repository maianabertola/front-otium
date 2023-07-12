import { Types } from `mongoose`
import service from "../service/service"

export interface Ivillas {
    name: string,
  country: string,
  region: string,
  numberOfPeople: number,
  squareMeter: number,
  bedrooms: number,
  bathrooms: number,
  view: string,
  pricePerWeek: number,
  bookedDates: [{
      End: Date, 
      Start: Date, 
  }]
  previewPhoto: string,
  heroPhoto: string,
  galeryPhoto: [string],
  tagline: string,
  slogan: string,
  description: string,
  idylicStatus: string,
  petFriendly: boolean,
  distinctiveFeatures: string,
  services: Types.ObjectId,
  roomsDescriptions: 
    [
      {
        room: string,
        description: string,
      },
    ],
  address: string,
  }

 export const getAllVillas = async () => {
   
        return service.get<Ivillas[]>("/villa")
        .then (res => res.data)
  };

  export const getOneVilla = async (id: number) => {
    return service.get<Ivillas[]>(`/villa/${id}`)
    .then (res => res.data)
  }

  export const patchVilla = async (id, newDatesVillaCollection) => {
    return service.patch(`/villa/${id}`, newDatesVillaCollection )
  }