import { enableProdMode, importProvidersFrom } from '@angular/core';
import { APP_ROUTES } from './app/app.routes';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from 'core';
import { reducers, metaReducers } from './app/store';
import { StoreModule } from '@ngrx/store';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomPageTitleStrategy } from './app/services/custom-page-title-strategy';
import { provideRouter, TitleStrategy, withComponentInputBinding, withHashLocation, withRouterConfig } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(APP_ROUTES, withComponentInputBinding(), withHashLocation(), withRouterConfig({paramsInheritanceStrategy: 'always'})),

        importProvidersFrom(
            FormsModule,
            BrowserModule,
            StoreModule.forRoot(reducers, { metaReducers }),
            CoreModule,
            !environment.production ? StoreDevtoolsModule.instrument() : []),
        {
            provide: TitleStrategy,
            useClass: CustomPageTitleStrategy
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
