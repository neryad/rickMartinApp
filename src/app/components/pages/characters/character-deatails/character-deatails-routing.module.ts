import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDeatailsComponent } from './character-deatails.component';

const routes: Routes = [{ path: '', component: CharacterDeatailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDeatailsRoutingModule { }
