import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form,FormGroup } from '@angular/forms';


@Component({
    selector: 'header',
    template: require('./header.component.html'),
    styles: [require('./header.component.css'),require('../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css')]
})
export class HeaderComponent{

}
