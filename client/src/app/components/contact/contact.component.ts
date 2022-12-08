import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//Servicio
import { ContactoService } from '../../services/contacto.service';
//Modelo
import { Contacto } from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  
})
export class ContactComponent implements OnInit { 
  
  contacto: Contacto = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  constructor(private formBuilder: FormBuilder, private contactoService: ContactoService) {}

  ngOnInit(): void {      
  } 

  saveNewContact(){
    this.contactoService.postdatos(this.contacto)
    .subscribe(
      res =>{
          console.log(res);          
      },
      err =>{
        console.error(err);
      }      
    );
    console.log(this.contacto);    
  } 



}

  




