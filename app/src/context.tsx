import { createContext, Dispatch } from "react";
import { LocationAction } from "./components/Locations/reducer";
import ILocation, { IAccount } from "./model";

export interface IInventory {
  locations: ILocation[];
  // accounts?: IAccount[];
  selectedLocation?: number;
}

export const initialState = {
  locations: [
    {
      id: 1,
      uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cba29",
      city: "Houston",
      state: "TX",
      address: "1 Build",
      zipcode: "77002",
      sqft: 25200,
    },
    {
      id: 2,
      uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cba49",
      city: "Houston",
      state: "TX",
      address: "2 Build",
      zipcode: "77002",
      sqft: 5400,
    },
    {
      id: 3,
      uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cba35",
      city: "Houston",
      state: "TX",
      address: "3 Build",
      zipcode: "77002",
      sqft: 27333,
    },
    {
      id: 4,
      uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cba31",
      city: "Houston",
      state: "TX",
      address: "4 Build",
      zipcode: "77002",
      sqft: 12435,
    },
  ],
  // accounts: [
  //   {
  //     id: 1,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbe29",
  //     locationId: 1,
  //     number: "0001E",
  //     service: "electric",
  //   },
  //   {
  //     id: 2,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbn29",
  //     locationId: 1,
  //     number: "0001NG",
  //     service: "natural_gas",
  //   },
  //   {
  //     id: 3,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbw29",
  //     locationId: 1,
  //     number: "0001W",
  //     service: "water",
  //   },
  //   {
  //     id: 4,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbe31",
  //     locationId: 4,
  //     number: "0001E",
  //     service: "electric",
  //   },
  //   {
  //     id: 5,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbg31",
  //     locationId: 4,
  //     number: "0001NG",
  //     service: "natural_gas",
  //   },
  //   {
  //     id: 6,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbw31",
  //     locationId: 4,
  //     number: "0001W",
  //     service: "water",
  //   },
  //   {
  //     id: 7,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbe35",
  //     locationId: 3,
  //     number: "0001E",
  //     service: "electric",
  //   },
  //   {
  //     id: 8,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbn35",
  //     locationId: 3,
  //     number: "0001NG",
  //     service: "natural_gas",
  //   },
  //   {
  //     id: 9,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbw35",
  //     locationId: 3,
  //     number: "0001W",
  //     service: "water",
  //   },
  //   {
  //     id: 10,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbe49",
  //     locationId: 2,
  //     number: "0001E",
  //     service: "electric",
  //   },
  //   {
  //     id: 11,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbn49",
  //     locationId: 2,
  //     number: "0001NG",
  //     service: "natural_gas",
  //   },
  //   {
  //     id: 12,
  //     uuid: "5d3652d6-a5c6-4018-8829-4ab4ff0cbw49",
  //     locationId: 2,
  //     number: "0001W",
  //     service: "water",
  //   },
  // ],
  selectedLocation: undefined,
};

const InventoryContext = createContext<{
  state: IInventory
  dispatch: Dispatch<LocationAction>
}>({
  state: initialState,
  dispatch: () => null,
});

export default InventoryContext;
