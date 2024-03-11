import { Component } from '@angular/core';
import {PhotosService} from "../photos.service";
import {Photo} from "../photo";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Location } from '@angular/common'

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  constructor(private photosService: PhotosService, private route: ActivatedRoute, private _location: Location) {  }
  photos:Photo[] = []

  ngOnInit(): void {
    this.getPhotos();
  }



  getPhotos(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")?.slice(1, ));
    this.photosService.getPhotosByID(id)
      .subscribe(photos => this.photos = photos.filter(photo => photo.albumId == id));
  }

  backButton(){
      this._location.back();
  }
}
