import { Injectable } from '@angular/core';
import { Music } from './music.module';

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    private musicas: Music[] = [
        { id: 1, title: 'Música 1', artist: 'Artista 1', album: 'Álbum 1', duration: '3:20' },
        // ... outras músicas
    ];

    getMusicas() {
        return this.musicas;
    }
}