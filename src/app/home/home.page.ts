import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {LibrosservicioService} from './librosservicio.service';
import {Libro} from './libros.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  lib:Libro;
  Url='https://www.etnassoft.com/api/v1/get/?book_title=';
  constructor(private libros:LibrosservicioService) {
  
  }

  book_title='';

  ngOnInit(){
    
    this.searchLibro();
  }

  searchLibro(){
    const search=encodeURIComponent(this.book_title).trim();
    this.lib=this.libros.getLibro(this.Url+search);
  }
}
