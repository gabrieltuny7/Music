import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { Music } from './music/music.module';
import { MusicService } from './music/music.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: HomePageComponent }])],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}

export class HomePage {
    musicas: Music[] = [];

    constructor(private musicService: MusicService) {
        this.musicas = musicService.getMusicas();
    }
}