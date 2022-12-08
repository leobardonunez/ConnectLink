"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoService = void 0;
const core_1 = require("@angular/core");
let ContactoService = class ContactoService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000';
        /*datos:{name: string, email:string, phone: string, message: string}
        const { name, email, phone, message } = req.body;*/
        this.datos = [];
    }
    postdatos(contacto) {
        /*return this.http.post(`${this.API_URI}/envio`,this.datos);*/
        //funciona
        /*return this.http.get('http://localhost:3000/send-email');*/
        return this.http.post(`${this.API_URI}/send-email`, contacto);
    }
};
ContactoService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], ContactoService);
exports.ContactoService = ContactoService;
