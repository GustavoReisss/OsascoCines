export interface MovieSessions {
    theaters?: (TheatersEntity)[] | null;
    date: string;
    dateFormatted: string;
    dayOfWeek: string;
    isToday: boolean;
  }
  export interface TheatersEntity {
    id: string;
    name: string;
    address: string;
    addressComplement: string;
    number: string;
    urlKey: string;
    neighborhood: string;
    properties: Properties;
    functionalities: Functionalities;
    deliveryType?: (string)[] | null;
    siteURL: string;
    nationalSiteURL: string;
    enabled: boolean;
    blockMessage: string;
    rooms?: (RoomsEntity)[] | null;
    geolocation: Geolocation;
    operationPolicies?: (null)[] | null;
  }
  export interface Properties {
    hasBomboniere: boolean;
    hasContactlessWithdrawal: boolean;
    hasSession: boolean;
    hasSeatDistancePolicy: boolean;
    hasSeatDistancePolicyArena: boolean;
  }
  export interface Functionalities {
    operationPolicyEnabled: boolean;
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
  export interface Geolocation {
    lat: number;
    lng: number;
  }
  