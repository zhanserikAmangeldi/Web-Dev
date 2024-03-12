import { Component } from '@angular/core';
import {Location, NgIf} from '@angular/common'
import {AlbumsService} from "../albums.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, Routes} from "@angular/router";
import {Album} from "../album";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    FormsModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {

  album: Album | undefined;
  newTitle: string = '';

  constructor(private _location:Location, private albumsService:AlbumsService, private route:ActivatedRoute, private router:Router) {}


  ngOnInit(): void {
    this.getAlbum();
  }

  ngOnChange(){
    this.getAlbum()
  }

  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")?.slice(1, ));

    this.albumsService.getAlbums().subscribe(
      albums => {
        this.album = albums.find(album => album.id == id) as Album;

        if(this.album == undefined){
          this.router.navigate([''])
        }
      }  )
  }

  changeTitle(newTitle: string){
    if(this.album){
      this.album.title = newTitle.toString();
      this.updateAlbum()
    }

  }
  backButton(){
    this._location.back();
  }

  updateAlbum() {
    let body: Album = {
      title: this.newTitle,
      userId: this.album!.userId,
      id: this.album!.id
    }

    this.albumsService.updateAlbum(body, ""+body.id)
      .subscribe(response => {
        console.log(response)
      })
  }
}
