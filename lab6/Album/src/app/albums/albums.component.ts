import { Component } from '@angular/core';
import {Album} from "../album";
import {AlbumsService} from "../albums.service";
import {CommonModule, NgFor} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {makeResourceNotFoundError} from "@angular/compiler-cli/src/ngtsc/annotations/component/src/resources";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  albums: Album[] = [];

  addAlbumForm = this.formBuilder.group({
    title: new FormControl('', {nonNullable: true}),
    userID: new FormControl('', {nonNullable: true}),
  })

  onSubmit(){
    if(this.addAlbumForm.value.title != undefined && this.addAlbumForm.value.userID != undefined
     && this.addAlbumForm.value.title != "" &&  +this.addAlbumForm.value.userID != 0){
      this.submitAlbum(this.addAlbumForm.value.title, +this.addAlbumForm.value.userID)
      window.location.reload()
    }else{
      alert("check that you enter all data")
    }
    this.addAlbumForm.reset()
  }


  submitAlbum(title: string, userID: number) {
    let body : Album = {
      title: title,
      userId: userID,
      id: this.albums.length + 1
    }

    this.albumsService.postAlbum(body)
      .subscribe(response => {
        console.log(response)
      })
  }
  constructor(private albumsService: AlbumsService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }

  deleteAlbum(id: String): void{
    // console.log(Date.now())
    this.albumsService.deleteAlbum(id).subscribe({
    next: () => {
      this.getAlbums()
    },
    error: () => {
      console.log("bekarys niger")
    }
    }
    )
    // console.log(Date.now())
  }


}
