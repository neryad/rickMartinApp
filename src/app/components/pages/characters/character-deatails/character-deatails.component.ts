import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '@app/shared/interfaces/character.interface';
import { ActivatedRoute } from '@angular/router';
import { CharcterService } from '@app/shared/services/charcter.service';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Component({
  selector: 'app-character-deatails',
  templateUrl: './character-deatails.component.html',
  styleUrls: ['./character-deatails.component.scss']
})
export class CharacterDeatailsComponent implements OnInit {
  character$:Observable<Character | TrackHttpError>;
  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharcterService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    })
  }

  onBack():void{
    this.location.back();
  }

}
