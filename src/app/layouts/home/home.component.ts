import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  sideBarOpen = false;
  isLoggin = true;
  title = 'rougeFront';
  mediaSub: Subscription;
  deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) {
  }
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
         console.log(result.mqAlias);
         this.deviceXs = result.mqAlias === 'xs' ? true : false;
        }
    );
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  sideBarToggeler($event: any): void {
    this.sideBarOpen = ! this.sideBarOpen;
  }
}
