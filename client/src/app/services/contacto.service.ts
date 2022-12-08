import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 
  API_URI= 'http://localhost:3000';
  
  constructor(private http: HttpClient) { } 
  
  /*datos:{name: string, email:string, phone: string, message: string}
  const { name, email, phone, message } = req.body;*/
  datos: any = [];

  postdatos(contacto: Contacto){
      const  { name, email, phone, message } = contacto;  
     /*return this.http.post(`${this.API_URI}/envio`,this.datos);*/
     //funciona
     /*return this.http.get('http://localhost:3000/send-email');*/          
     return this.http.post(`${this.API_URI}/send-email`,contacto);
  }
  
}



  
