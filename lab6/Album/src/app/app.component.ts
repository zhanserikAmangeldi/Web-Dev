import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AlbumsService} from "./albums.service";
import {PhotosService} from "./photos.service";
import {Album} from "./album";
import {Photo} from "./photo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Album';
  albums:Album[] = []
  photos:Photo[] = []

  constructor(private albumsService: AlbumsService, private photosService: PhotosService) {}


  ngOnInit(){
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums
    })
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos
    })
  }

}
