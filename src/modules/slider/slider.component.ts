import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MdSliderModule} from '@angular/material';
import 'hammerjs';

@Component({
    selector: 'slider',
    template: require('./slider.component.html'),
    styles: ['./slider.component.css']
})
export class SliderComponent{
  autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;

}
