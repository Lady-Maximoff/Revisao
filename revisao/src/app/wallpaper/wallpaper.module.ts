import { NgModule } from '@angular/core';


import { FotolistComponent } from './fotolist/fotolist.component';
import { FotoComponent } from './fotos/fotos.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FotolistComponent,
    FotoComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
  
    FotolistComponent,
    FotoComponent
  ]
})
export class WallpaperModule { }
