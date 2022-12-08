"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoController_1 = require("../controllers/contactoController");
class ContactoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Envia a controllers a ejecutar el metodo que llame
        this.router.get('/', contactoController_1.contactoController.list);
        this.router.post('/', contactoController_1.contactoController.prueba);
    }
}
const contactoRoutes = new ContactoRoutes();
exports.default = contactoRoutes.router;
