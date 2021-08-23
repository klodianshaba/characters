import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const bounceOutKeyframe = [
  style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: .2}),
  style({opacity:1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .5}),
  style({ opacity: 0 ,transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1} ),
];

export const  bounceOut = trigger('bounceOut', [
    transition('* => out', animate('{{timings}}', keyframes( bounceOutKeyframe ))),
    transition(':leave', animate('{{timings}}', keyframes( bounceOutKeyframe )))
]);
