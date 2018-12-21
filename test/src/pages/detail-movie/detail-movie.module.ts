import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMoviePage } from './detail-movie';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailMoviePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DetailMoviePage),
  ],
})
export class DetailMoviePageModule {}
