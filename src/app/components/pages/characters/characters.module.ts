import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {CharacterDeatailsComponent} from './character-deatails/character-deatails.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterComponent} from './charaacter.components';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
const myComponets = [CharacterDeatailsComponent,
  CharacterListComponent,CharacterComponent];
@NgModule({
  declarations: [ ...myComponets],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports:[ ...myComponets]
})
export class CharactersModule { }
