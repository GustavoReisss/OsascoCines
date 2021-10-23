export interface Movie {
    movies?: (MoviesEntity)[] | null;
    date: string;
    dateFormatted: string;
    dayOfWeek: string;
    isToday: boolean;
  }
  export interface MoviesEntity {
    id: string;
    title: string;
    originalTitle: string;
    movieIdUrl: string;
    inPreSale: boolean;
    isReexhibition: boolean;
    duration: string;
    contentRating: string;
    distributor: string;
    urlKey: string;
    siteURL: string;
    nationalSiteURL: string;
    siteURLByTheater: string;
    nationalSiteURLByTheater: string;
    boxOfficeId: string;
    ancineId: string;
    images?: (ImagesEntity)[] | null;
    trailers?: (TrailersEntity)[] | null;
    genres?: (string)[] | null;
    ratingDescriptors?: (string | null)[] | null;
    tags?: (null)[] | null;
    completeTags?: (null)[] | null;
    rooms?: (RoomsEntity)[] | null;
    rottenTomatoe: RottenTomatoe;
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
  export interface RoomsEntity {
    name: string;
    type?: null;
    sessions?: (SessionsEntity)[] | null;
  }
  export interface SessionsEntity {
    id: string;
    price: number;
    type?: (string)[] | null;
    types?: (TypesEntity)[] | null;
    date: DateOrRealDate;
    realDate: DateOrRealDate;
    time: string;
    defaultSector: string;
    midnightMessage?: null;
    siteURL: string;
    nationalSiteURL?: null;
    hasSeatSelection: boolean;
    driveIn: boolean;
    streaming: boolean;
    maxTicketsPerCar: number;
    enabled: boolean;
    blockMessage: string;
  }
  export interface TypesEntity {
    id: number;
    name: string;
    alias: string;
    display: boolean;
  }
  export interface DateOrRealDate {
    localDate: string;
    isToday: boolean;
    dayOfWeek: string;
    dayAndMonth: string;
    hour: string;
    year: string;
  }
  export interface RottenTomatoe {
    id: string;
    criticsRating: string;
    criticsScore: string;
    audienceRating: string;
    audienceScore: string;
    originalUrl: string;
  }
  