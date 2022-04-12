import { generateUUIDv4 as uuid } from "@bitjourney/uuid-v4";

const uid: string = uuid();

export default interface ILocation {
    id?: number;
    address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    sqft?: number;
}

export interface IAccount {
    id?: number;
    locationId?: number;
    number: string;
    service: string;// "water" | "electric" | "natural_gas";

}

export interface IBill extends IAccount {
    id?: number;
    accoutnId: number;
    locationId: number;
    month: Date;
    total_amount: number;
}

// export interface IServiceType {
//     id?: typeof uid;
//     name?: string;
// }

export interface IReading {
    id?: number;
    accountId: number;
    locationId?: number;
    usage: number;
    uom: string;
}

export interface ICharge {
    id?: number;
    accountId: number;
    locationId?: number;
    total: number;
}