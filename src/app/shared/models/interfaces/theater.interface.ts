export interface Theater {
    id: string;
    images?: (ImagesEntity)[] | null;
    urlKey: string;
    name: string;
    siteURL: string;
    nationalSiteURL: string;
    cnpj: string;
    districtAuthorization: string;
    address: string;
    addressComplement: string;
    number: string;
    cityId: string;
    cityName: string;
    state: string;
    uf: string;
    neighborhood: string;
    properties: Properties;
    functionalities: Functionalities;
    telephones?: (string)[] | null;
    geolocation: Geolocation;
    deliveryType?: (string)[] | null;
    corporation: string;
    corporationId: string;
    corporationPriority: number;
    corporationAvatarBackground: string;
    rooms?: (RoomsEntity)[] | null;
    totalRooms: number;
    enabled: boolean;
    blockMessage: string;
    partnershipType?: null;
    operationPolicies?: (null)[] | null;
  }
  export interface ImagesEntity {
    url: string;
    type: string;
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
  export interface Geolocation {
    lat: number;
    lng: number;
  }
  export interface RoomsEntity {
    id: string;
    name: string;
    fullName: string;
    capacity: number;
    documents?: (null)[] | null;
  }
  