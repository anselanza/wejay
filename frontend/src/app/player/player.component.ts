import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

import { LoopBackConfig } from '../shared/sdk';
import { Party } from '../shared/sdk/models';
import { PartyApi } from '../shared/sdk/services';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  private party: Party = new Party();
  constructor(
    public appState: AppState,
    private partyApi: PartyApi
  ) {
    LoopBackConfig.setBaseURL('http://localhost:3001');
    LoopBackConfig.setApiVersion('api');
    this.getParty(1);
  }

  public ngOnInit() {
    console.log('PlayerComponent');
  }

  getParty(id: any): void {
    console.log('get party with id', id);
    this.partyApi.findById(
      id,
      {
        include: ['tracks']
      }
    ).subscribe((party: Party) => {
      console.log('Got Party by ID:', party);
      this.party = party;
    })
  }

}
