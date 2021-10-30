import { RottenTomatoe } from "./rottenTomatoe.interface";

export interface Movie {
    id: string;
    title: string;
    originalTitle: string;
    movieIdUrl: string;
    ancineId: string;
    countryOrigin: string;
    priority: number;
    contentRating: string;
    duration: string;
    rating: number;
    synopsis: string;
    cast: string;
    director: string;
    distributor: string;
    inPreSale: boolean;
    isReexhibition: boolean;
    urlKey: string;
    isPlaying: boolean;
    countIsPlaying: number;
    premiereDate: PremiereDate;
    creationDate: string;
    city: string;
    siteURL: string;
    nationalSiteURL: string;
    images?: (ImagesEntity)[] | null;
    genres?: (string)[] | null;
    ratingDescriptors?: (string | null)[] | null;
    completeTags?: (null)[] | null;
    tags?: (null)[] | null;
    trailers?: (TrailersEntity | null)[] | null;
    boxOfficeId?: null;
    partnershipType?: null;
    rottenTomatoe?: RottenTomatoe | null;
  }

  export interface PremiereDate {
    localDate: string;
    isToday: boolean;
    dayOfWeek: string;
    dayAndMonth: string;
    hour: string;
    year: string;
  }

  export interface ImagesEntity {
    url: string;
    type: string;
  }
  
  export interface TrailersEntity {
    type: string;
    url: string;
    embeddedUrl: string;
  }