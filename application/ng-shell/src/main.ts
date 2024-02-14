// import { loadManifest } from '@angular-architects/module-federation';

/*loadManifest("/ng-shell/assets/mf.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));*/

import {loadManifest} from "@angular-architects/module-federation";

Promise.all([
    loadManifest("http://localhost:8080/ng-shell/me/manifests/all"),

]).catch((err) => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch((err) => console.error(err));

/*import('./bootstrap')
  .catch(err => console.error(err));*/
