/* tslint:disable */

declare var Object: any;
export interface PartyInterface {
  name: string;
  id?: number;
  tracks?: Party[];
}

export class Party implements PartyInterface {
  name: string;
  id: number;
  tracks: Party[];
  constructor(data?: PartyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Party`.
   */
  public static getModelName() {
    return "Party";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Party for dynamic purposes.
  **/
  public static factory(data: PartyInterface): Party{
    return new Party(data);
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
      name: 'Party',
      plural: 'Parties',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        tracks: {
          name: 'tracks',
          type: 'Party[]',
          model: 'Party'
        },
      }
    }
  }
}
