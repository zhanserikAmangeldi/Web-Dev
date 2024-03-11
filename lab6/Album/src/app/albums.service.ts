import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "./album";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  private albumsAPI:string = "http://localhost:3000/albums"

  ngOnRefresh(){

  }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.albumsAPI)
  }


  deleteAlbum(id: String): Observable<{}>{
    return this.http.delete(`http://localhost:3000/albums/${id}`)
  }


}
