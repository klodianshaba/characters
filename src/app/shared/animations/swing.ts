
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const swingKeyframe = [
  style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2}),
  style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
  style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
  style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8}),
  style({transform: 'none', offset: 1})
];

export const  swing = trigger('swing', [
  transition('* => in', animate('{{timings}}', keyframes(swingKeyframe))),
  transition(':leave', animate('{{timings}}', keyframes(swingKeyframe))),

]);
