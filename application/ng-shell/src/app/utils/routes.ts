import { Routes } from "@angular/router";
import { APP_ROUTES } from '../app.routes';
import { CustomManifest } from "./config";
import { loadRemoteModule } from "@angular-architects/module-federation";


export function buildRoutes(options: CustomManifest): Routes {

  const lazyRoutes: Routes = Object.keys(options).map(key => {
    const entry = options[key];
    return {
      path: entry.routePath,
        title: entry.displayName,
      loadChildren: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: entry.remoteEntry,
            exposedModule: entry.exposedModule
        })
          .then(m => m[entry.routes])
    }
  });

  return [...APP_ROUTES, ...lazyRoutes];
}
