import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FakeBackendService } from './services/fake-backend.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(FakeBackendService, { delay: 500 }))
    // provideInMemoryDb(FakeBackendService, {
    //   delay: 500, // opcjonalnie: opóźnienie odpowiedzi
    //   passThruUnknownUrl: true // pozwala przepuszczać inne zapytania
    // })

  ]
};





