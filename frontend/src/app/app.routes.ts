import { Routes } from '@angular/router';
import { PlayerComponent } from './player';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: PlayerComponent },
];
