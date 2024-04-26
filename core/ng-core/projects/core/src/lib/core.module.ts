import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store';



@NgModule({
    imports: [
        StoreModule.forFeature(fromCore.userFeatureKey, fromCore.reducer),
        CoreComponent
    ],
    exports: [
        CoreComponent
    ]
})
export class CoreModule { }
