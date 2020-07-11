import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {Character} from './../../../../shared/interfaces/character.interface';
import {CharcterService} from './../../../../shared/services/charcter.service';
import { take, filter } from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';
type RequesInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters:Character[] = [];
  showgoUpBtn = false;
  info: RequesInfo = {
    next:null
  };

  private pageNum = 1;
  private query: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharcterService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.onUrlchange();
     }

  ngOnInit(): void {
    this.getCharactersbyQuery();
  }

  @HostListener('window:scroll',[])

  onWindoesScroll():void {

    const  yOffSet = window.pageYOffset;
    if(( yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop ) > this.showScrollHeight ) {

      this.showgoUpBtn = true;
    } else if ( this.showgoUpBtn && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop ) < this.showScrollHeight) {
      this.showgoUpBtn = false;
    }
  }
  onScrollDown():void{
    if(this.info.next){
      this.pageNum++;
      this.getDataFromService();
    }


  }

  onScrollTop():void{
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0; //other
  }
  private onUrlchange():void{
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd )).subscribe(
        () => {
          this.characters = [];
          this.pageNum = 1;
          this.getCharactersbyQuery();
        }
      );

    // );
    // )
  }
  private getCharactersbyQuery():void{
      this.route.queryParams.pipe(
        take(1)
      ).subscribe((params: ParamMap) => {


        this.query = params['q'];
        this.getDataFromService();
      })

  }

  private getDataFromService ():void {
    this.characterSvc.searchCharacters(this.query, this.pageNum)
      .pipe(
        take(1)
      ).subscribe((res:any) => {

        if(res?.results?.length){
          const { info, results} = res;
          this.characters = [...this.characters, ...results]
          this.info = info;
        } else {
          this.characters = [];
        }

      }, (error:TrackHttpError) => console.log(error.friendlyMessage)
      )
  }
}
