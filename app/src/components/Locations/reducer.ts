import { IInventory, } from '../../context'
import ILocation from '../../model'

export type LocationAction =
     | { type: 'SET_SELECTED', payload: number }
// | { type: 'CREATE_ITEM', payload: ILocation }

export default function locationReducer(state: IInventory, action: LocationAction) {

     switch (action.type) {
          case 'SET_SELECTED':

               return {
                    ...state,
                    selectedLocation: action.payload,
               }
          // case 'CREATE_ITEM':

          //      return {
          //           ...state,
          //           selectedLocation: undefined
          //      }
          default:
               return state

     }
}