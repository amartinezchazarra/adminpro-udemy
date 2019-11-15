import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../../app.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})



export class HeaderComponent implements OnInit {
  public idioma:string ;
  
  constructor(private translate: TranslateService) {
    this.idioma ="flag-icon flag-icon-es";
    translate.setDefaultLang('es');
    
    this.useLanguage(translate.currentLang);
    this.idioma="flag-icon flag-icon-"+translate.getDefaultLang();
  }
 
  useLanguage(language: string) {
    this.translate.use(language);
    this.idioma="flag-icon flag-icon-"+language;
}

  ngOnInit() {
  }

}
