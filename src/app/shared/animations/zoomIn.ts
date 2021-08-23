import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const zoomInKeyframe = [
  style({opacity:0,transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0}),
  style({opacity:1, transform: 'none', offset: 1})
];

export const  zoomIn = trigger('zoomIn', [
  transition('* => in', animate('{{timings}}', keyframes(zoomInKeyframe))),
]);
