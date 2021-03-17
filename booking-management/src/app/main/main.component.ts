import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('matSideNav') matSideNav: any = '';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      if (event.target.innerWidth < 1000) {
          this.matSideNav.close();
      } else {
        this.matSideNav.open();
      }
  }
  isLinear = false;
  constructor() { }

  ngOnInit(): void {
    
  }

}
