import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor( public auth: AuthService , private router: Router ) { }

  ngOnInit(): void {
  }
  toggleSideBar(): void {
    this.toggleSideBarForMe.emit();
  }
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
