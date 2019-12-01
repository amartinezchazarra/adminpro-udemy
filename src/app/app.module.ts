import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//temporal
import { FormsModule } from '@angular/forms';

// Modulos
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';

//Translation
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Rutes
import { APP_ROUTES } from './app.routes';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

  // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
