/* tslint:disable */
import {
  Party
} from '../index';

declare var Object: any;
export interface TrackInterface {
  url: string;
  id?: number;
  partiesId?: number;
  parties?: Party;
}

export class Track implements TrackInterface {
  url: string;
  id: number;
  partiesId: number;
  parties: Party;
  constructor(data?: TrackInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Track`.
   */
  public static getModelName() {
    return "Track";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Track for dynamic purposes.
  **/
  public static factory(data: TrackInterface): Track{
    return new Track(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Track',
      plural: 'Tracks',
      properties: {
        url: {
          name: 'url',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        partiesId: {
          name: 'partiesId',
          type: 'number'
        },
      },
      relations: {
        parties: {
          name: 'parties',
          type: 'Party',
          model: 'Party'
        },
      }
    }
  }
}
