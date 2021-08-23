import {animate, sequence, style, transition, trigger} from "@angular/animations";

export const transform =
trigger('transform', [
  transition('void => in', [
    style({ opacity: '0', transform: '{{translate}}' }),
    sequence([
      animate("0.5s ease", style({ opacity: 1  ,transform: 'translateX(0) scale(1)'}))
    ])
  ]),
  transition('* => void', [
    style({ opacity: 1 , transform: 'translateX(0) scale(1)' }),
    sequence([
      animate("0.5s ease", style({ opacity: 0 , transform: '{{translate}}'}))
    ])
  ])
]);
