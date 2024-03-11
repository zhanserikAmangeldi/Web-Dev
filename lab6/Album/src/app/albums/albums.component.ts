import { Component } from '@angular/core';
import {Album} from "../album";
import {AlbumsService} from "../albums.service";
import {CommonModule, NgFor} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, RouterLinkActive],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }

  deleteAlbum(id: String): void{
    // console.log(Date.now())
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== +id)
    })
    this.getAlbums()
    // console.log(Date.now())
  }

}
