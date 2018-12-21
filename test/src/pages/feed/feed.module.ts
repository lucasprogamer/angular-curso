import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { CardComponent } from '../../components/card/card';

@NgModule({
  declarations: [
    CardComponent,
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
  ],
})
export class FeedPageModule {}
