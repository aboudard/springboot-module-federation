import { enableProdMode, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './app/store';
import { StoreModule } from '@ngrx/store';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            RouterModule.forRoot(APP_ROUTES, { useHash: true }),
            StoreModule.forRoot(reducers, { metaReducers }),
            !environment.production ? StoreDevtoolsModule.instrument() : []),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
