import { Injectable } from '@angular/core';
import {Libro} from './libros.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosservicioService {
 
  librodetail={
  title:'',
  author:'',
  content:'',
  thumbnail:'',
  publisher:'',
  publisher_date:'',
  language:'',
  category:'',
  pages:'',
  ID:'',
  }
  constructor(public http:HttpClient) { }
  

  public getLibro(results:string){
    
    this.http.get(results).subscribe((data)=>{
   this.librodetail.title=data[0]['title'];
   this.librodetail.author=data[0]['author'];
   this.librodetail.content=data[0]['content_short'];
  this.librodetail.thumbnail=data[0]['thumbnail'];
  this.librodetail.publisher=data[0]['publisher'];
  this.librodetail.publisher_date=data[0]['publisher_date'];
  this.librodetail.language=data[0]['language'];
  this.librodetail.pages=data[0]['pages'];
  this.librodetail.ID=data[0]['ID'];
    });
    return this.librodetail;
  }
}
