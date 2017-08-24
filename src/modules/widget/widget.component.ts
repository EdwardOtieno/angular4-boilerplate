import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MdSliderModule, MdSnackBar} from '@angular/material';
import 'hammerjs';

@Component({
    selector: 'widget',
    template: require('./widget.component.html'),
    styles: ['./widget.component.css']
})
export class WidgetComponent {
	constructor(public snackBar: MdSnackBar) { }
	autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 10;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;

    openSnackBar(message: string, action: string) {
		this.snackBar.open(message, " ", {
			duration: 2000,
		});
	}
	folders = [
		{
			name: 'Photos',
			updated: new Date('1/1/16'),
		},
		{
			name: 'Recipes',
			updated: new Date('1/17/16'),
		},
		{
			name: 'Work',
			updated: new Date('1/28/16'),
		}
	];
	tiles = [
		{ text: 'Light Blue', cols: 3, rows: 1, color: 'lightblue' },
		{ text: 'Light Green', cols: 1, rows: 2, color: 'lightgreen' },
		{ text: 'Light Pink', cols: 1, rows: 1, color: 'lightpink' },
		{ text: 'Light Purple', cols: 2, rows: 1, color: '#DDBDF1' },
	];

}
