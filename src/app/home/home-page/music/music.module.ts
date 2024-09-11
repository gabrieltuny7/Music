import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MusicModule { }
export interface Music {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
}