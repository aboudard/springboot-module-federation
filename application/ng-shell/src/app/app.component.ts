import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUser } from 'core';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Spring Boot Microfrontend';
  remotes: CustomRemoteConfig[] = [];
  user$ = this.store.select(getUser);

  constructor(
    private router: Router,
    private store: Store
  ) {
  }

  async ngOnInit() {
    const httpManifest = getManifest<CustomManifest>();
    const routes = buildRoutes(httpManifest);
    this.router.resetConfig(routes);
    this.remotes = Object.values(httpManifest);
  }

}
