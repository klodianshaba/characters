import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const heartBeatKeyframe = [
    style({ transform: 'scale(1)', offset: 0}),
    style({ transform: 'scale(1.3)', offset: .14}),
    style({ transform: 'scale(1)', offset: .28}),
    style({ transform: 'scale(1.3)', offset: .42}),
    style({ transform: 'scale(1)', offset: .70}),
];

export const  heartBeat = trigger('heartBeat', [
  transition(':leave', animate('{{timings}}', keyframes( heartBeatKeyframe ))),
  transition(':enter', animate('{{timings}}', keyframes( heartBeatKeyframe ))),
]);
