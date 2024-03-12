import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Photo} from "./photo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  private photosAPI:string = "http://localhost:3000/photos"

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.photosAPI)
  }

}
