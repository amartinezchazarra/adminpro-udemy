import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//Translation
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations:[
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    imports:[
            // ngx-translate and the loader module
        HttpClientModule,
        RouterModule,
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]
})

export class SharedModule{}
 
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}