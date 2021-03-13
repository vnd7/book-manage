import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'booking-management';

  constructor(
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer
  ){
    this.iconRegistry.addSvgIcon('crown', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/crown.svg'));        
  }
  ngOnInit(){
  }
}
