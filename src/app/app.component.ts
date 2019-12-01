import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hospital';
  constructor(private translate: TranslateService,
              public _ajustes: SettingsService) {
    translate.setDefaultLang('es');
  }
 
  useLanguage(language: string) {
    this.translate.use(language);
  }

}
