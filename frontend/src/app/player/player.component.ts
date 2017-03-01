import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('PlayerComponent');
  }

}
